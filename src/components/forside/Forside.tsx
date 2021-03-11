import React from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import lenker from '../../config/lenker';
import { Link } from 'react-router-dom';
import Side from '../felles/side';

const Forside = () => {
  return (
    <Side sidetittel='Søknadsskjemaer' title='Skjema for arbeidstakere bosatt i utlandet' subtitle='Søknadsskjema'>
      <Row>
        <Column md='6'>
          <Normaltekst>
            Gå til skjema for <Link to={lenker.Bulkinnsending}>bulk</Link>
          </Normaltekst>
        </Column>
        <Column md='6'>
          <Normaltekst>
            Gå til skjema for <Link to={lenker.Enkeltinnsendinng}>enkel</Link>
          </Normaltekst>
        </Column>
      </Row>
    </Side>
  );
};

export default Forside;
