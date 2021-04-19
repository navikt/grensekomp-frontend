import React from 'react';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import Lenke from 'nav-frontend-lenker';
import { Innholdstittel } from 'nav-frontend-typografi';

const MånedsinntektHjelpeLabel = () => (
  <HjelpeLabel label='Beregnet månedsinntekt'>
    <Innholdstittel>Beregning av månedsinntekt</Innholdstittel>
    <ul>
      <li>
        Tidspunktet for beregning er 29. januar 2021. Dette betyr at det er inntekter i månedene oktober, november,
        desember 2020 som skal legges til grunn når du gjør beregningen.
      </li>
      <li>
        Ut over særtilfellet nevnt ovenfor gjelder{' '}
        <Lenke href='https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger'>
          samme beregningsregler som for sykepenger.
        </Lenke>
      </li>
      <li>
        Hvilke{' '}
        <Lenke href='https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten'>
          inntekter som kan tas med i beregningen
        </Lenke>{' '}
        er det også viktig å være klar over.
      </li>
    </ul>
  </HjelpeLabel>
);
export default MånedsinntektHjelpeLabel;
