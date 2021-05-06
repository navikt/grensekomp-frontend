import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Column, Row } from 'nav-frontend-grid';
import lenker from '../../config/lenker';
import InternLenke from '../felles/InternLenke/InternLenke';
import mapIsoTilLand from '../../state/oversikt-krav/mapIsoTilLand';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';
import Endringsdata from '../bulk/Endringsdata';
import { useParams } from 'react-router';

interface SlettetKravKvitteringProps {
  identitetsnummer?: string;
  land?: string;
  fom?: string;
  tom?: string;
  beloep?: number;
  refusjon?: number;
}

interface PathParams {
  language: string;
}

const SlettetKravKvittering = (props: SlettetKravKvitteringProps) => {
  const { t } = useTranslation();

  const { language } = useParams<PathParams>();

  const endringsdata: Endringsdata = {
    identitetsnummer: props.identitetsnummer ?? '',
    isoLand: props.land ?? '',
    beloep: props.beloep ?? 0
  };

  return (
    <div className='slettet-krav-kvittering'>
      <Row>
        <Column>
          <Panel>
            <Sidetittel>{t(LangKey.KRAV_SLETTET)}</Sidetittel>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Normaltekst>
              {t(LangKey.ID_NUMBER)}: {props.identitetsnummer}
            </Normaltekst>
            <Normaltekst>
              {t(LangKey.BOSTEDLAND)}: {mapIsoTilLand(props.land)}
            </Normaltekst>
            <Normaltekst>
              {t(LangKey.PERIODE)}: {props.fom} - {props.tom}
            </Normaltekst>
            <Normaltekst>
              {t(LangKey.BEREGNET_INNTEKT)}: {props.beloep}
            </Normaltekst>
            <Normaltekst>
              {t(LangKey.BEREGNET_REFUSJON)}: {props.refusjon}
            </Normaltekst>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <div>
              <InternLenke
                to={{
                  pathname: lenker.Innsending.replace(':language', language),
                  state: endringsdata
                }}
              >
                {t(LangKey.KRAV_NY)}
              </InternLenke>
            </div>
            <br />
            <div>
              <Lenke href='https://loginservice.nav.no/slo'>{t(LangKey.LOGG_UT)}</Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>{t(LangKey.MIN_SIDE)}</Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default SlettetKravKvittering;
