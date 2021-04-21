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
import FraHjelpeLabel from './FraHjelpeLabel';
import TilHjelpeLabel from './TilHjelpeLabel';
import BeregnetRefusjon from './BeregnetRefusjon';
import BeloepHjelpeLabel from './BeloepHjelpeLabel';

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
                  Arbeidsgivere er pålagt å utbetale kompensasjon til personer som taper inntekt fordi de ikke kan møte
                  på arbeid som følge av innreiseforbudet i forbindelse med pandemien. Arbeidsgiveren forskutterer
                  kompensasjonen og krever refusjon fra Arbeids- og velferdsetaten. For å få refusjon må alle felter
                  fylles ut. Du kan sende inntil <b>50 krav</b> om gangen.
                </Ingress>
              </Panel>
              <Panel>
                <Ingress style={{ marginLeft: '3rem' }}>
                  <li>Ordningen gjelder fra 29. januar da innreiseforbudet ble innført</li>
                  <li>
                    Ordningen gjelder for arbeidstakere som var ansatt og hadde påbegynt arbeidet fra dette tidspunktet.
                    Den ansatte må ha vært i jobb i minst fire uker før det tidspunktet man krever refusjon fra.
                  </li>
                  <li>
                    Hvis arbeidsgiveren er kjent med at den ansatte har hatt inntekt fra en annen jobb , skal det ikke
                    gis kompensasjon for dager som den ansatte har hatt annen inntekt. Det samme gjelder ytelser fra
                    bostedslandet hvis arbeidsgiveren er kjent med det.
                  </li>
                  <li>Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet.</li>
                  <li>
                    Kompensasjonen er 70 % av sykepengegrunnlaget, begrenset opp til 70 % av 6G,&nbsp;
                    <Lenke
                      target='_blank'
                      href='https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden'
                    >
                      folketrygdens grunnbeløp
                    </Lenke>
                  </li>
                  <li>Avviklet ferie kan omgjøres til arbeidsdager som det gis refusjon for.</li>
                  <li>
                    Søknaden blir behandlet automatisk.&nbsp;
                    <Lenke
                      target='_blank'
                      href='https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/nyheter/kompensasjon-til-utestengte-eos-borgere/automatisert-saksbehandling-i-forbindelse-med-innreiseforbudet'
                    >
                      Les om den automatiserte saksbehandlingen.
                    </Lenke>
                  </li>
                </Ingress>
              </Panel>

              <Skillelinje />

              <Panel>
                <SkjemaGruppe aria-live='polite' legend='Oppgi ansatte, fraværsperiode og beløp'>
                  {state.items?.map((item, index) => (
                    <Row
                      key={item.uniqueKey}
                      className={`bulk-innsending__rad ${index % 2 ? 'odd' : 'even'} ${
                        index > 0 ? 'not-first-row' : 'first-row'
                      }`}
                    >
                      <Column md='1' className='bulk-kolonne-1'>
                        <Element className='bulk-element-nr'>{index === 0 ? 'Nr.' : '\u00A0'}</Element>
                        <RadNr nr={index + 1} />
                      </Column>

                      <Column md='11' className='bulk-main-input-wrapper'>
                        <Row>
                          <Column md='2' className='bulk-kolonne-2'>
                            <Fnr
                              id={'fnr_' + item.uniqueKey}
                              fnr={item.fnr}
                              label='Fødsels-/D-nummer'
                              placeholder='11 siffer'
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
                              label='Bostedsland'
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
                              label={<TilHjelpeLabel />}
                              placeholder='dd.mm.åå'
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
                              placeholder='Beløp'
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
                      {state.items && state.items.length < MAX_ITEMS && (
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
