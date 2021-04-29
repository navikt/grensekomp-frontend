import React, { useEffect, useReducer } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Panel from 'nav-frontend-paneler';
import { Element, Ingress } from 'nav-frontend-typografi';
import Skillelinje from '../felles/Skillelinje';
import { Input, SkjemaGruppe } from 'nav-frontend-skjema';
import Fnr from '../felles/Fnr';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import BulkReducer from '../../state/bulk/BulkReducer';
import BulkState, { defaultBulkState, MAX_ITEMS } from '../../state/bulk/BulkState';
import { Actions } from '../../state/bulk/BulkActions';
import environment from '../../config/environment';
import postBulk from '../../api/bulk/postBulk';
import mapBulkRequest from '../../api/bulk/mapBulkRequest';
import Kvittering from '../kvittering';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import Side from '../felles/Side';
import '../felles/knapper/LeggTilKnapp.sass';
import Lenke from 'nav-frontend-lenker';
import './BulkInnsending.sass';
import RadNr from '../felles/RadNr';
import LeggTilKnapp from '../felles/knapper/LeggTilKnapp';
import Slettknapp from '../felles/knapper/Slettknapp';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import { Hovedknapp } from 'nav-frontend-knapper';
import { toDate } from '../../utils/dato/toDate';
import Bostedland from './Bostedland/Bostedland';
import { maxDate, minDate } from '../../config/dager';
import BeregnetRefusjon from './BeregnetRefusjon';
import BeloepHjelpeLabel from './BeloepHjelpeLabel';
import { useTranslation } from 'react-i18next';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import Key from '../../locales/Key';

interface BulkInnsendingProps {
  state?: BulkState;
}

const BulkInnsending = (props: BulkInnsendingProps) => {
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(BulkReducer, props.state, defaultBulkState);
  const { arbeidsgiverId } = useArbeidsgiver();
  const showDeleteButton = state.items && state.items.length > 1;

  const handleCloseServerFeil = () => {
    dispatch({ type: Actions.HideServerError, i18n });
  };

  const handleCloseNotAuthorized = () => {
    dispatch({ type: Actions.NotAuthorized, i18n });
  };

  const handleSubmitClicked = () => {
    dispatch({
      type: Actions.Validate,
      i18n,
      payload: {}
    });
    return false;
  };

  useEffect(() => {
    dispatch({
      type: Actions.Orgnr,
      i18n,
      payload: { orgnr: arbeidsgiverId }
    });
  }, [arbeidsgiverId]);

  useEffect(() => {
    if (state.validated === true && state.progress === true && state.submitting === true) {
      postBulk(environment.baseUrl, mapBulkRequest(state)).then((response) => {
        dispatch({
          type: Actions.HandleResponse,
          i18n,
          payload: { response: response }
        });
      });
    }
  }, [state.validated, state.progress, state.feilmeldinger, state.submitting, state.bekreft, state]);

  return (
    <Side bedriftsmeny={true} className='bulk-innsending' sidetittel={t(Key.SIDETITTEL)} subtitle={'Subtitle'}>
      <Row>
        <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
        <Column>
          {state.kvittering === true && <Kvittering />}
          {state.progress != true && state.kvittering != true && (
            <>
              <Panel>
                <Ingress>{t(Key.HEADER_1)}</Ingress>
                <Ingress className='air-top'>
                  {t(Key.HEADER_2)}
                  <strong>{t(Key.HEADER_3)}</strong>
                  {t(Key.HEADER_4)}
                  <strong>{t(Key.HEADER_5)}</strong>
                  {t(Key.HEADER_6)}
                </Ingress>
              </Panel>
              <Panel className='bulletpoint-wrapper'>
                <ul className='ingress-listepunkter'>
                  <li>{t(Key.INFO_1)}</li>
                  <li>{t(Key.INFO_2)}</li>
                  <li>{t(Key.INFO_3)}</li>
                  <li>{t(Key.INFO_4)}</li>
                  <li>{t(Key.INFO_5)}</li>
                  <li>
                    {t(Key.INFO_6)}
                    <Lenke
                      target='_blank'
                      href='https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden'
                    >
                      {t(Key.GRUNNBELOEP)}
                    </Lenke>
                  </li>
                  <li>
                    <Lenke
                      target='_blank'
                      href='https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/nyheter/kompensasjon-til-utestengte-eos-borgere/automatisert-saksbehandling-i-forbindelse-med-innreiseforbudet'
                    >
                      {t(Key.INFO_7)}
                    </Lenke>
                  </li>
                </ul>
              </Panel>

              <Skillelinje />

              <Panel>
                <SkjemaGruppe aria-live='polite' legend={t(Key.SKJEMA_LEGEND)}>
                  {state.items?.map((item, index) => (
                    <Row
                      key={item.uniqueKey}
                      className={`bulk-innsending__rad ${index % 2 ? 'odd' : 'even'} ${
                        index > 0 ? 'not-first-row' : 'first-row'
                      }`}
                    >
                      <Column md='1' className='bulk-kolonne-1'>
                        <Element className='bulk-element-nr'>{index === 0 ? t(Key.NUMBER) : '\u00A0'}</Element>
                        <RadNr nr={index + 1} />
                      </Column>

                      <Column md='11' className='bulk-main-input-wrapper'>
                        <Row>
                          <Column md='2' className='bulk-kolonne-2'>
                            <Fnr
                              id={'fnr_' + item.uniqueKey}
                              fnr={item.fnr}
                              label={t(Key.FNR_LABEL)}
                              placeholder={t(Key.FNR_PLACEHOLDER)}
                              feilmelding={item.fnrError}
                              disabled={item.accepted}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Fnr,
                                  i18n,
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
                              label={t(Key.LAND_LABEL)}
                              feilmelding={item.landError}
                              disabled={item.accepted}
                              value={item.land}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Land,
                                  i18n,
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
                                label={t(Key.SLETT_LABEL)}
                                onClick={(event) => {
                                  dispatch({
                                    type: Actions.DeleteItem,
                                    i18n,
                                    payload: {
                                      itemId: item.uniqueKey
                                    }
                                  });
                                }}
                              />
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
                                <HjelpeLabel label={t(Key.FRA_HJELPE_LABEL)}>{t(Key.FRA_HJELPE_CONTENT)}</HjelpeLabel>
                              }
                              placeholder={t(Key.DATO_PLACEHOLDER)}
                              disabled={item.accepted}
                              minDate={minDate}
                              maxDate={maxDate}
                              className='input--fullbredde bulk-element'
                              onChange={(dato) => {
                                dispatch({
                                  type: Actions.Fra,
                                  i18n,
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
                                <HjelpeLabel label={t(Key.TIL_HJELPE_LABEL)}>{t(Key.TIL_HJELPE_CONTENT)}</HjelpeLabel>
                              }
                              placeholder={t(Key.DATO_PLACEHOLDER)}
                              disabled={item.accepted}
                              minDate={minDate}
                              maxDate={maxDate}
                              className='input--fullbredde'
                              onChange={(dato) => {
                                dispatch({
                                  type: Actions.Til,
                                  i18n,
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
                              placeholder={t(Key.BELOEP_PLACEHOLDER)}
                              feil={item.beloepError}
                              value={item.beloep}
                              disabled={item.accepted}
                              className='bulk-element'
                              onChange={(event) => {
                                dispatch({
                                  type: Actions.Beloep,
                                  i18n,
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
                      {state.items && state.items.length < MAX_ITEMS && (
                        <LeggTilKnapp
                          onClick={(event) => {
                            dispatch({
                              type: Actions.AddItem,
                              i18n,
                              payload: {}
                            });
                          }}
                        >
                          + {t(Key.ADD)}
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
                    i18n,
                    payload: { bekreft: !state.bekreft }
                  })
                }
              />

              <Feilmeldingspanel feilmeldinger={state.feilmeldinger} />

              <Panel>
                <Hovedknapp onClick={handleSubmitClicked}>{t(Key.SEND)}</Hovedknapp>
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
