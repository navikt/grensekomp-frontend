import React, { useEffect, useReducer } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Panel from 'nav-frontend-paneler';
import { Ingress } from 'nav-frontend-typografi';
import Skillelinje from '../felles/Skillelinje';
import { Input, SkjemaGruppe } from 'nav-frontend-skjema';
import Fnr from '../felles/Fnr';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import { Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import BulkReducer from './BulkReducer';
import BulkState, { defaultBulkState } from './BulkState';
import { Actions } from './BulkActions';
import Slettknapp from '../felles/Slettknapp';
import environment from '../../environment';
import postBulk from '../../api/bulk/postBulk';
import mapBulkRequest from '../../api/bulk/mapBulkRequest';
import Kvittering from '../kvittering';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import Side from '../felles/Side';
import toDate from '../../utils/toDate';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import './LeggTilKnapp.sass';
import Lenke from 'nav-frontend-lenker';

interface BulkInnsendingProps {
  state?: BulkState;
}

const BulkInnsending = (props: BulkInnsendingProps) => {
  const [state, dispatch] = useReducer(BulkReducer, props.state, defaultBulkState);
  const { arbeidsgiverId } = useArbeidsgiver();
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
      className='bulkinnsending'
      sidetittel='Refusjonssøknad for grensearbeidere'
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
                  <p>
                    Du kan få refundert lønn til ansatte som ikke kommer seg på jobb i Norge på grunn av strenge
                    innreiserestriksjoner. Ordningen gjelder fra 29. januar da innreiseforbudet ble innført, og varer så
                    lenge innreiseforbudet for arbeidstakere gjelder.
                  </p>
                  <p>
                    Kompensasjonen er 70 prosent av sykepengegrunnlaget, begrenset opp til 6 ganger&nbsp;
                    <Lenke href='https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden'>
                      folketrygdens grunnbeløp
                    </Lenke>
                    . Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet. Alle felter må
                    fylles ut om ikke annet er oppgitt
                  </p>
                </Ingress>
              </Panel>

              <Skillelinje />

              <Panel id='gravidside-panel-ansatte2' className='gravidside-panel-ansatte2'>
                <SkjemaGruppe aria-live='polite'>
                  {state.items?.map((item, index) => (
                    <Row key={item.uniqueKey}>
                      <Column md='1'>
                        <b className='skjemaelement__label'>Nr.</b>
                        <div style={{ lineHeight: '1.375rem', padding: '0.5rem', marginBottom: '0.5rem' }}>
                          {index + 1}
                        </div>
                      </Column>
                      <Column md='2'>
                        <Fnr
                          id={'fnr_' + item.uniqueKey}
                          fnr={item.fnr}
                          label='Fødselsnummer'
                          placeholder='Fødselsnummer'
                          feilmelding={item.fnrError}
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
                      <Column md='2'>
                        <DatoVelger
                          id={'fom_' + item.uniqueKey}
                          dato={toDate(item.fom)}
                          feilmelding={item.fomError}
                          label='Fom'
                          placeholder='dd.mm.åå'
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
                      <Column md='2'>
                        <DatoVelger
                          id={'tom_' + item.uniqueKey}
                          dato={toDate(item.tom)}
                          feilmelding={item.tomError}
                          label='Tom'
                          placeholder='dd.mm.åå'
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
                      <Column md='2'>
                        <Input
                          id={'dager_' + item.uniqueKey}
                          label={
                            <div style={{ display: 'flex' }}>
                              Antall dager
                              <Hjelpetekst style={{ marginLeft: '0.5rem' }}>Kommer snart...</Hjelpetekst>
                            </div>
                          }
                          placeholder='Antall'
                          feil={item.dagerError}
                          value={item.dager}
                          onChange={(event) => {
                            dispatch({
                              type: Actions.Dager,
                              payload: {
                                itemId: item.uniqueKey,
                                dager: event.currentTarget.value
                              }
                            });
                          }}
                        />
                      </Column>
                      <Column md='2'>
                        <Input
                          id={'beloeop_' + item.uniqueKey}
                          label={
                            <div style={{ display: 'flex' }}>
                              Beløp
                              <Hjelpetekst style={{ marginLeft: '0.5rem' }}>Kommer snart...</Hjelpetekst>
                            </div>
                          }
                          placeholder='Kr'
                          feil={item.beloepError}
                          value={item.beloep}
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
                      <Column md='1'>
                        <Slettknapp
                          onClick={(event) => {
                            dispatch({
                              type: Actions.DeleteItem,
                              payload: {
                                itemId: item.uniqueKey
                              }
                            });
                          }}
                        />
                      </Column>
                    </Row>
                  ))}
                  <Row>
                    <Column md='1'></Column>
                    <Column md='6'>
                      <Flatknapp
                        className='leggtil-knapp'
                        onClick={(event) => {
                          dispatch({
                            type: Actions.AddItem,
                            payload: {}
                          });
                        }}
                      >
                        + Legg til enda en ansatt
                      </Flatknapp>
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
