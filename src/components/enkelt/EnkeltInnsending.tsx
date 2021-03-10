import { Column, Row } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Ingress, Systemtittel } from 'nav-frontend-typografi';
import React from 'react';
import Fnr from '../felles/Fnr';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Side from '../felles/Side';
import Skillelinje from '../felles/Skillelinje';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import '@navikt/helse-arbeidsgiver-felles-frontend/src/components/DatoVelger.css';
import { Hovedknapp } from 'nav-frontend-knapper';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';

const EnkeltInnsending = () => {
  const state = {};
  const handleSubmitClicked = () => {
    return true;
  };

  const handleCloseNotAuthorized = () => {
    return true;
  };

  return (
    <Side
      bedriftsmeny={false}
      className='enkeltinnsending'
      sidetittel='Søknadsskjema'
      title='Søknad om inntektssikring for utestengte EØS-borgere'
      subtitle='Enkeltinnsending'
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

              <Panel id='gravidside-panel-ansatte' className='gravidside-panel-ansatte'>
                <SkjemaGruppe aria-live='polite'>
                  <Row>
                    <Column md='3' xs='12'>
                      <Systemtittel>Hvilken arbeidstaker gjelder søknaden?</Systemtittel>
                      <br />
                      <Fnr
                        label='Fødselsnummer (11 siffer)'
                        fnr={state.fnr}
                        placeholder='11 siffer'
                        feilmelding={state.fnrError}
                        onValidate={() => {}}
                        onChange={(fnr: string) =>
                          dispatch({
                            type: Actions.Fnr,
                            payload: { fnr: fnr }
                          })
                        }
                      />
                    </Column>
                    <Skillelinje />
                    <Column md='3' xs='12'>
                      <Systemtittel>Hvilken periode var den ansatte borte?</Systemtittel>
                      <br />
                      <DatoVelger
                        className='termindato'
                        id='termindato'
                        label='Termindato (dersom kjent)'
                        onChange={(termindato: Date) => {
                          dispatch({
                            type: Actions.Termindato,
                            payload: { termindato }
                          });
                        }}
                      />
                      <DatoVelger
                        className='termindato'
                        id='termindato'
                        label='Termindato (dersom kjent)'
                        onChange={(termindato: Date) => {
                          dispatch({
                            type: Actions.Termindato,
                            payload: { termindato }
                          });
                        }}
                      />
                    </Column>
                    <Column md='3' xs='12'></Column>
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
                <Hovedknapp onClick={handleSubmitClicked}>Send søknad</Hovedknapp>
              </Panel>
            </div>
          )}
        </Column>
        {state.notAuthorized && <LoggetUtAdvarsel onClose={handleCloseNotAuthorized} />}
      </Row>
    </Side>
  );
};

export default EnkeltInnsending;
