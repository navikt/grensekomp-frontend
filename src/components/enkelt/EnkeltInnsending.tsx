import { Column, Row } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Ingress, Systemtittel } from 'nav-frontend-typografi';
import React from 'react';
import Fnr from '../felles/Fnr';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Skillelinje from '../felles/Skillelinje';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import '@navikt/helse-arbeidsgiver-felles-frontend/src/components/DatoVelger.css';
import { Hovedknapp } from 'nav-frontend-knapper';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import { Actions } from '../bulk/BulkActions';
import Side from '../felles/Side';

const EnkeltInnsending = () => {
  const state = {
    serverError: false,
    kvittering: false,
    fnr: '',
    fnrError: '',
    progress: false,
    bekreft: false,
    bekreftError: '',
    notAuthorized: false,
    feilmeldinger: []
  };
  const handleSubmitClicked = () => {
    return true;
  };

  const handleCloseNotAuthorized = () => {
    return true;
  };

  const handleCloseServerFeil = () => {
    return true;
  };

  const dispatch = (response) => {
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
      <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
      {state.progress != true && (
        <>
          <Row>
            <Column>
              <Panel>
                <Ingress>
                  Når sykefraværet handler om korona, dekker NAV sykepenger fra dag 4 i de 16 dagene arbeidsgiveren
                  vanligvis skal betale. Den ansatte må være smittet, mistenkt smittet eller i pålagt karantene.Refusjon
                  kan gis for dager fra og med 16. mars. Se mer informasjon om refusjonsordningen. Det kan ikke søkes om
                  refusjon for fravær på grunn av stengte skoler eller barnehager
                </Ingress>
                <Ingress>Alle felter må fylles ut om ikke annet er oppgitt</Ingress>
              </Panel>
            </Column>
          </Row>
          <Skillelinje />
          <Row>
            <Panel id='gravidside-panel-ansatte' className='gravidside-panel-ansatte'>
              <SkjemaGruppe aria-live='polite'>
                <Row>
                  <Column>
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
                  <Row>
                    <Column md='3' xs='12'>
                      <Systemtittel>Hvilken periode var den ansatte borte?</Systemtittel>
                      <br />
                      <DatoVelger
                        className='termindato'
                        id='fradato'
                        label=''
                        onChange={(fra: Date) => {
                          dispatch({
                            type: Actions.Fra,
                            payload: { fra }
                          });
                        }}
                      />
                      <DatoVelger
                        className='termindato'
                        id='tildato'
                        label=''
                        onChange={(til: Date) => {
                          dispatch({
                            type: Actions.Til,
                            payload: { til }
                          });
                        }}
                      />
                    </Column>
                    <Column md='3' xs='12'></Column>
                  </Row>
                </Row>
              </SkjemaGruppe>
            </Panel>
          </Row>
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
        </>
      )}
      {state.notAuthorized && <LoggetUtAdvarsel onClose={handleCloseNotAuthorized} />}
    </Side>
  );
};

export default EnkeltInnsending;
