import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Column, Row } from 'nav-frontend-grid';
import lenker from '../../config/lenker';
import InternLenke from '../felles/InternLenke/InternLenke';
import mapIsoTilLand from '../../state/oversikt-krav/mapIsoTilLand';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

interface SlettetKravKvitteringProps {
  identitetsnummer?: string;
  land?: string;
  fom?: string;
  tom?: string;
  beloep?: number;
  refusjon?: number;
}

const SlettetKravKvittering = (props: SlettetKravKvitteringProps) => {
  const { t } = useTranslation();
  return (
    <div className='slettet-krav-kvittering'>
      <Row>
        <Column>
          <Panel>
            <Sidetittel>{t(Key.KRAV_SLETTET)}</Sidetittel>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Normaltekst>
              {t(Key.ID_NUMBER)}: {props.identitetsnummer}
            </Normaltekst>
            <Normaltekst>
              {t(Key.BOSTEDLAND)}: {mapIsoTilLand(props.land)}
            </Normaltekst>
            <Normaltekst>
              {t(Key.PERIODE)}: {props.fom} - {props.tom}
            </Normaltekst>
            <Normaltekst>
              {t(Key.BEREGNET_INNTEKT)}: {props.beloep}
            </Normaltekst>
            <Normaltekst>
              {t(Key.BEREGNET_REFUSJON)}: {props.refusjon}
            </Normaltekst>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <div>
              <InternLenke to={lenker.Bulkinnsending}>{t(Key.KRAV_NY)}</InternLenke>
            </div>
            <br />
            <div>
              <Lenke href='https://loginservice.nav.no/slo'>{t(Key.LOGG_UT)}</Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>{t(Key.MIN_SIDE)}</Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default SlettetKravKvittering;
