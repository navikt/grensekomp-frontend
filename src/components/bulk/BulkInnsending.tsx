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
import BulkState, { defaultBulkState } from '../../state/bulk/BulkState';
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
import FraHjelpeLabel from './FraHjelpeLabel';
import TilHjelpeLabel from './TilHjelpeLabel';
import BeregnetRefusjon from './BeregnetRefusjon';

interface BulkInnsendingProps {
  state?: BulkState;
}

const BulkInnsending = (props: BulkInnsendingProps) => {
  const [state, dispatch] = useReducer(BulkReducer, props.state, defaultBulkState);
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
      postBulk(environment.baseUrl, mapBulkRequest(state)).then((response) => {
        dispatch({
          type: Actions.HandleResponse,
          payload: { response: response }
        });
      });
    }
  }, [state.validated, state.progress, state.feilmeldinger, state.submitting, state.bekreft, state]);

  return (
    <Side
      bedriftsmeny={true}
      className='bulk-innsending'
      sidetittel='Refusjon for lønn ved innreiseforbud'
      subtitle='Bulkinnsending'
    >
      <Row>
        <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
        <Column>
          {state.kvittering === true && <Kvittering />}
          {state.progress != true && state.kvittering != true && (
            <div>
              <Panel>
                <Ingress>
                  Du kan få refundert lønn til ansatte som ikke kommer seg på jobb i Norge på grunn av strenge
                  innreiserestriksjoner. Alle felter må fylles ut.
                </Ingress>
              </Panel>
              <Panel>
                <Ingress style={{ marginLeft: '3rem' }}>
                  <li>Ordningen gjelder fra 29. januar da innreiseforbudet ble innført</li>
                  <li>Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet.</li>
                  <li>
                    Kompensasjonen er 70 % av sykepengegrunnlaget, begrenset opp til 70 % av 6G,&nbsp;
                    <Lenke href='https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden'>
                      folketrygdens grunnbeløp
                    </Lenke>
                  </li>
                  <li>Avviklet ferie kan omgjøres til arbeidsdager som det gis refusjon for.</li>
                </Ingress>
              </Panel>

              <Skillelinje />

              <Panel>
                <SkjemaGruppe aria-live='polite' legend='Oppgi ansatte, fraværsperiode og beløp'>
                  {state.items?.map((item, index) => (
                    <Row key={item.uniqueKey} className={`bulk-innsending__rad ${index % 2 ? 'odd' : 'even'}`}>
                      <Column md='1' className='bulk-kolonne-1'>
                        <Element>{index === 0 ? 'Nr.' : '\u00A0'}</Element>
                        <RadNr nr={index + 1} />
                      </Column>

                      <Column md='11'>
                        <Row>
                          <Column md='2' className='bulk-kolonne-2'>
                            <Fnr
                              id={'fnr_' + item.uniqueKey}
                              fnr={item.fnr}
                              label='Fødsels-/D-nummer'
                              placeholder='11 siffer'
                              feilmelding={item.fnrError}
                              disabled={item.accepted}
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
                              label='Bostedland'
                              feilmelding={item.landError}
                              disabled={item.accepted}
                              value={item.land}
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
                          <Column md='1' className='bulk-kolonne-8'>
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
                              label={<FraHjelpeLabel />}
                              placeholder='dd.mm.åå'
                              minDate={minDate}
                              maxDate={maxDate}
                              className='input--fullbredde'
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
                              label={<TilHjelpeLabel />}
                              placeholder='dd.mm.åå'
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
                          <Column md='2' className='bulk-kolonne-5'>
                            <Input
                              id={'beloep_' + item.uniqueKey}
                              label={'Månedsinntekt'}
                              placeholder='Beløp'
                              feil={item.beloepError}
                              value={item.beloep}
                              disabled={item.accepted}
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
                          <Column md='2' className='bulk-kolonne-6'></Column>
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
                      <LeggTilKnapp
                        onClick={(event) => {
                          dispatch({
                            type: Actions.AddItem,
                            payload: {}
                          });
                        }}
                      >
                        + Legg til enda en ansatt
                      </LeggTilKnapp>
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
                <Hovedknapp onClick={handleSubmitClicked}>Send krav om refusjon</Hovedknapp>
              </Panel>
            </div>
          )}
        </Column>
        {state.notAuthorized && <LoggetUtAdvarsel onClose={handleCloseNotAuthorized} />}
      </Row>
    </Side>
  );
};

export default BulkInnsending;
