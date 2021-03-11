import React, { useReducer } from 'react';
import Side from '../felles/Side';
import { Column, Row } from 'nav-frontend-grid';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Panel from 'nav-frontend-paneler';
import { Ingress, Systemtittel } from 'nav-frontend-typografi';
import Skillelinje from '../felles/Skillelinje';
import { FnrInput, Input, Label, SkjemaGruppe } from 'nav-frontend-skjema';
import Fnr from '../felles/Fnr';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import BulkReducer from './BulkReducer';
import BulkState, { defaultBulkState } from './BulkState';
import { Actions } from './BulkActions';
import { Dato } from '../../utils/Dato';
import dayjs from 'dayjs';
import Slettknapp from '../felles/Slettknapp';
import InternLenke from '../felles/InternLenke';

interface BulkInnsendingProps {
  state?: BulkState;
}

const toDate = (dato: Dato | undefined): Date | undefined => {
  if (!dato) {
    return;
  }
  if (!dato.month || !dato.day || !dato.year) {
    return;
  }
  return dayjs(
    dato.year + '-' + (dato.month < 10 ? '0' : '') + dato.month + '-' + (dato!!.day < 10 ? '0' : '') + dato.day
  ).toDate();
};

const BulkInnsending = (props: BulkInnsendingProps) => {
  const [state, dispatch] = useReducer(BulkReducer, props.state, defaultBulkState);
  const handleCloseServerFeil = () => {
    return true;
  };
  const handleCloseNotAuthorized = () => {
    return true;
  };
  const handleSubmitClicked = () => {
    dispatch({
      type: Actions.Validate,
      payload: {}
    });
    return true;
  };
  return (
    <Side
      bedriftsmeny={true}
      className='bulkinnsending'
      sidetittel='Søknadsskjema'
      title='Søknad om inntektssikring for utestengte EØS-borgere'
      subtitle='Bulkinnsending'
    >
      <Row>
        <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
        <Column>
          {state.progress != true && state.kvittering != true && (
            <div>
              <Panel>
                <Ingress>
                  Når sykefraværet handler om korona, dekker NAV sykepenger fra dag 4 i de 16 dagene arbeidsgiveren
                  vanligvis skal betale. Den ansatte må være smittet, mistenkt smittet eller i pålagt karantene.Refusjon
                  kan gis for dager fra og med 16. mars. Se mer informasjon om refusjonsordningen. Det kan ikke søkes om
                  refusjon for fravær på grunn av stengte skoler eller barnehager
                </Ingress>
                <Ingress>Alle felter må fylles ut om ikke annet er oppgitt</Ingress>
              </Panel>

              <Skillelinje />

              <Panel id='gravidside-panel-ansatte2' className='gravidside-panel-ansatte2'>
                <SkjemaGruppe aria-live='polite'>
                  {state.items.map((item, index) => (
                    <Row key={item.uniqueKey}>
                      <Column md='1'>
                        <b className='skjemaelement__label'>Nr</b>
                        <div style={{ lineHeight: '1.375rem', padding: '0.5rem', marginBottom: '0.5rem' }}>
                          {index + 1}
                        </div>
                      </Column>
                      <Column md='2'>
                        <Fnr
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
                          label='Dager'
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
                          label='Beløp'
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
                      <InternLenke
                        onClick={(event) => {
                          dispatch({
                            type: Actions.AddItem,
                            payload: {}
                          });
                        }}
                      >
                        + Legg til enda en ansatt
                      </InternLenke>
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
