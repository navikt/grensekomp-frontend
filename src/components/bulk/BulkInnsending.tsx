import React, { Reducer, useEffect, useReducer } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Panel from 'nav-frontend-paneler';
import { Element, Ingress } from 'nav-frontend-typografi';
import Skillelinje from '../felles/Skillelinje';
import { Input, SkjemaGruppe } from 'nav-frontend-skjema';
import { DatoVelger, Fnr, BekreftOpplysningerPanel } from '@navikt/helse-arbeidsgiver-felles-frontend';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import BulkReducer from '../../state/bulk/BulkReducer';
import BulkState, { defaultBulkState, MAX_ITEMS } from '../../state/bulk/BulkState';
import { Actions, BulkActions } from '../../state/bulk/BulkActions';
import environment from '../../config/environment';
import postBulk from '../../api/bulk/postBulk';
import mapBulkRequest from '../../api/bulk/mapBulkRequest';
import Kvittering from '../kvittering';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import Side from '../felles/Side';
import '../felles/knapper/LeggTilKnapp.sass';
import './BulkInnsending.sass';
import RadNr from '../felles/RadNr/RadNr';
import LeggTilKnapp from '../felles/knapper/LeggTilKnapp';
import Slettknapp from '../felles/knapper/Slettknapp';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import { Hovedknapp } from 'nav-frontend-knapper';
import { toDate } from '../../utils/dato/toDate';
import Bostedland from './Bostedland/Bostedland';
import { maxDate, minDate } from '../../config/dager';
import BeregnetRefusjon from './BeregnetRefusjon';
import BeloepHjelpeLabel from './BeloepHjelpeLabel';
import { useTranslation } from 'react-i18next';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import { i18n } from 'i18next';
import Oversettelse from '../felles/Oversettelse/Oversettelse';
import LangKey from '../../language/LangKey';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import Endringsdata from './Endringsdata';
import Language from '../../language/Language';

interface BulkInnsendingProps {
  state?: BulkState;
}

export interface PathParams {
  language: Language;
}

interface LocationParams {
  identitetsnummer: string;
  beloep: number;
  isoLand: string;
}

const BulkInnsending = (props: BulkInnsendingProps) => {
  const { t, i18n } = useTranslation();

  let { language } = useParams<PathParams>();

  const locationData = useLocation<LocationParams>();

  const endringsdata: Endringsdata = {};

  if (locationData.state?.identitetsnummer) {
    endringsdata.identitetsnummer = locationData.state.identitetsnummer;
    endringsdata.beloep = locationData.state.beloep;
    endringsdata.isoLand = locationData.state.isoLand;
  }

  const BulkReducerSettOpp =
    (Translate: i18n): Reducer<BulkState, BulkActions> =>
    (bulkState: BulkState, action: BulkActions) =>
      BulkReducer(bulkState, action, Translate);

  const BulkReducerI18n: Reducer<BulkState, BulkActions> = BulkReducerSettOpp(i18n);
  const [state, dispatch] = useReducer(BulkReducerI18n, props.state, defaultBulkState);
  const { arbeidsgiverId } = useArbeidsgiver();
  const showDeleteButton = state.items && state.items.length > 1;

  const handleCloseServerFeil = () => {
    dispatch({ type: Actions.HideServerError });
  };

  const handleCloseNotAuthorized = () => {
    dispatch({ type: Actions.NotAuthorized });
  };

  const handleSubmitClicked = () => {
    dispatch({
      type: Actions.Validate,
      payload: {}
    });
    return false;
  };

  useEffect(() => {
    dispatch({
      type: Actions.Orgnr,
      payload: { orgnr: arbeidsgiverId }
    });
  }, [arbeidsgiverId]);

  useEffect(() => {
    if (state.validated === true && state.progress === true && state.submitting === true) {
      postBulk(environment.baseUrl, mapBulkRequest(state), language).then((response) => {
        dispatch({
          type: Actions.HandleResponse,
          payload: { response: response }
        });
      });
    }
  }, [state.validated, state.progress, state.feilmeldinger, state.submitting, state.bekreft, state, language]);

  useEffect(() => {
    if (endringsdata.identitetsnummer) {
      dispatch({
        type: Actions.ResubmitItem,
        payload: {
          fnr: endringsdata.identitetsnummer,
          beloep: endringsdata.beloep ? endringsdata.beloep.toString() : '',
          land: endringsdata.isoLand
        }
      });
    }
  }, [endringsdata.identitetsnummer, endringsdata.beloep, endringsdata.isoLand]);

  const isReinsending = !!endringsdata.identitetsnummer;

  const ingresstekstLangKey = isReinsending ? LangKey.BULKINNSENDING_INFO_REINNSENDING : LangKey.BULKINNSENDING_INFO;

  const skjemaoverskriftLangKey = isReinsending
    ? LangKey.BULKINNSENDING_SKJEMA_OVERSKRIFT_REINNSENDING
    : LangKey.BULKINNSENDING_SKJEMA_OVERSKRIFT;

  const reinnsendingClass = isReinsending ? ' reinnsending' : '';

  return (
    <Side bedriftsmeny={true} className='bulk-innsending' sidetittel={t(LangKey.SIDETITTEL)} subtitle={'Subtitle'}>
      <Row>
        <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
        <Column>
          {state.kvittering === true && <Kvittering />}
          {state.progress != true && state.kvittering != true && (
            <>
              <Panel>
                <Ingress>
                  <Oversettelse langKey={ingresstekstLangKey} />
                </Ingress>
              </Panel>

              <Skillelinje />

              <Panel>
                <SkjemaGruppe aria-live='polite' legend={t(skjemaoverskriftLangKey)}>
                  {state.items?.map((item, index) => (
                    <Row
                      key={item.uniqueKey}
                      className={`bulk-innsending__rad ${index % 2 ? 'odd' : 'even'} ${
                        index > 0 ? 'not-first-row' : 'first-row'
                      }`}
                    >
                      {!isReinsending && (
                        <Column md='1' className='bulk-kolonne-1'>
                          <Element className='bulk-element-nr'>{index === 0 ? t(LangKey.NUMBER) : '\u00A0'}</Element>
                          <RadNr nr={index + 1} />
                        </Column>
                      )}

                      <Column md='11' className={'bulk-main-input-wrapper' + reinnsendingClass}>
                        <Row>
                          <Column md='2' className='bulk-kolonne-2'>
                            <Fnr
                              id={'fnr_' + item.uniqueKey}
                              fnr={item.fnr}
                              label={t(LangKey.FNR_LABEL)}
                              placeholder={t(LangKey.FNR_PLACEHOLDER)}
                              feilmelding={item.fnrError}
                              disabled={item.accepted}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Fnr,
                                  payload: {
                                    itemId: item.uniqueKey,
                                    fnr: event
                                  }
                                });
                              }}
                            />
                          </Column>
                          <Column md='4'>
                            <Bostedland
                              id={'land_' + item.uniqueKey}
                              label={t(LangKey.LAND_LABEL)}
                              language={i18n.language}
                              feilmelding={item.landError}
                              disabled={item.accepted}
                              value={item.land}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Land,
                                  payload: {
                                    itemId: item.uniqueKey,
                                    land: event
                                  }
                                });
                              }}
                            />
                          </Column>
                          <Column md='6' className='bulk-kolonne-8'>
                            {showDeleteButton && (
                              <Slettknapp
                                disabled={item.accepted}
                                onClick={(event) => {
                                  dispatch({
                                    type: Actions.DeleteItem,
                                    payload: {
                                      itemId: item.uniqueKey
                                    }
                                  });
                                }}
                              >
                                {t(LangKey.SLETT_LABEL)}
                              </Slettknapp>
                            )}
                          </Column>
                        </Row>
                        <Row>
                          <Column md='2' className='bulk-kolonne-3'>
                            <DatoVelger
                              id={'fom_' + item.uniqueKey}
                              dato={toDate(item.fom)}
                              feilmelding={item.fomError}
                              label={
                                <HjelpeLabel label={t(LangKey.FRA_HJELPE_LABEL)}>
                                  {t(LangKey.FRA_HJELPE_CONTENT)}
                                </HjelpeLabel>
                              }
                              placeholder={t(LangKey.DATO_PLACEHOLDER)}
                              disabled={item.accepted}
                              minDate={minDate}
                              maxDate={maxDate}
                              className='input--fullbredde bulk-element'
                              onChange={(dato) => {
                                dispatch({
                                  type: Actions.Fra,
                                  payload: {
                                    itemId: item.uniqueKey,
                                    fra: dato
                                  }
                                });
                              }}
                            />
                          </Column>
                          <Column md='2' className='bulk-kolonne-4'>
                            <DatoVelger
                              id={'tom_' + item.uniqueKey}
                              dato={toDate(item.tom)}
                              feilmelding={item.tomError}
                              label={
                                <HjelpeLabel label={t(LangKey.TIL_HJELPE_LABEL)}>
                                  {t(LangKey.TIL_HJELPE_CONTENT)}
                                </HjelpeLabel>
                              }
                              placeholder={t(LangKey.DATO_PLACEHOLDER)}
                              disabled={item.accepted}
                              minDate={minDate}
                              maxDate={maxDate}
                              className='input--fullbredde'
                              onChange={(dato) => {
                                dispatch({
                                  type: Actions.Til,
                                  payload: {
                                    itemId: item.uniqueKey,
                                    til: dato
                                  }
                                });
                              }}
                            />
                          </Column>
                          <Column md='3' className='bulk-kolonne-5'>
                            <Input
                              id={'beloep_' + item.uniqueKey}
                              label={<BeloepHjelpeLabel />}
                              placeholder={t(LangKey.BELOEP_PLACEHOLDER)}
                              feil={item.beloepError}
                              value={item.beloep}
                              disabled={item.accepted}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Beloep,
                                  payload: {
                                    itemId: item.uniqueKey,
                                    beloep: event.currentTarget.value
                                  }
                                });
                              }}
                            />
                          </Column>
                          <Column md='3' className='bulk-kolonne-7'>
                            <BeregnetRefusjon fom={item.fom} tom={item.tom} inntekt={item.beloep} />
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                  ))}
                  <Row>
                    <Column md='1' className='bulk-kolonne-1'></Column>
                    <Column md='6'>
                      {state.items && state.items.length < MAX_ITEMS && !isReinsending && (
                        <LeggTilKnapp
                          onClick={(event) => {
                            dispatch({
                              type: Actions.AddItem,
                              payload: {}
                            });
                          }}
                        >
                          + {t(LangKey.ADD)}
                        </LeggTilKnapp>
                      )}
                    </Column>
                  </Row>
                </SkjemaGruppe>
              </Panel>

              <Skillelinje />

              <BekreftOpplysningerPanel
                checked={state.bekreft || false}
                feil={state.bekreftError}
                onChange={() =>
                  dispatch({
                    type: Actions.Bekreft,
                    payload: { bekreft: !state.bekreft }
                  })
                }
              />

              <Feilmeldingspanel feilmeldinger={state.feilmeldinger} />

              <Panel>
                <Hovedknapp onClick={handleSubmitClicked}>{t(LangKey.SEND)}</Hovedknapp>
              </Panel>
            </>
          )}
        </Column>
        {state.notAuthorized && <LoggetUtAdvarsel onClose={handleCloseNotAuthorized} />}
      </Row>
    </Side>
  );
};

export default BulkInnsending;
