import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Column, Row } from 'nav-frontend-grid';
import lenker from '../../config/lenker';
import InternLenke from '../felles/InternLenke/InternLenke';
import mapIsoTilLand from '../../state/oversikt-krav/mapIsoTilLand';

interface SlettetKravKvitteringProps {
  identitetsnummer?: string;
  land?: string;
  fom?: string;
  tom?: string;
  beloep?: number;
  refusjon?: number;
}

const SlettetKravKvittering = (props: SlettetKravKvitteringProps) => (
  <div className='slettet-krav-kvittering'>
    <Row>
      <Column>
        <Panel>
          <Sidetittel>Kravet er slettet</Sidetittel>
        </Panel>
      </Column>
    </Row>

    <Row>
      <Column>
        <Panel>
          <Normaltekst>Personnummer/D-nummer: {props.identitetsnummer}</Normaltekst>
          <Normaltekst>Bostedsland: {mapIsoTilLand(props.land)}</Normaltekst>
          <Normaltekst>
            Periode: {props.fom} - {props.tom}
          </Normaltekst>
          <Normaltekst>Beregnet månedsinntekt: {props.beloep}</Normaltekst>
          <Normaltekst>Anslått refusjon: {props.refusjon}</Normaltekst>
        </Panel>
      </Column>
    </Row>

    <Row>
      <Column>
        <Panel>
          <div>
            <InternLenke to={lenker.Bulkinnsending}>
              Her kan du sende inn nytt krav for denne arbeidstakeren om du vil.
            </InternLenke>
          </div>
          <br />
          <div>
            <Lenke href='https://loginservice.nav.no/slo'>Logg ut</Lenke>
          </div>
          <div>
            <Lenke href='/min-side-arbeidsgiver/'>Min side arbeidsgiver</Lenke>
          </div>
        </Panel>
      </Column>
    </Row>
  </div>
);

export default SlettetKravKvittering;
