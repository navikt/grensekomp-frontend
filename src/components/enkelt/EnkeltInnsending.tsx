import { Column, Row } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Ingress, Systemtittel } from 'nav-frontend-typografi';
import React, { useReducer } from 'react';
import Fnr from '../felles/Fnr';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Skillelinje from '../felles/Skillelinje';
import LoggetUtAdvarsel from '../login/LoggetUtAdvarsel';
import { DatoVelger } from '@navikt/helse-arbeidsgiver-felles-frontend';
import '@navikt/helse-arbeidsgiver-felles-frontend/src/components/DatoVelger.css';
import { Hovedknapp } from 'nav-frontend-knapper';
import BekreftOpplysningerPanel from '../felles/BekreftOpplysningerPanel';
import Feilmeldingspanel from '../felles/Feilmeldingspanel';
import Side from '../felles/side';
import { defaultBulkState } from '../bulk/BulkState';
import BulkReducer from '../bulk/BulkReducer';

const EnkeltInnsending = () => {
  return (
    <Side
      bedriftsmeny={false}
      className='enkeltinnsending'
      sidetittel='Søknadsskjema'
      title='Søknad om inntektssikring for utestengte EØS-borgere'
      subtitle='Enkeltinnsending'
    ></Side>
  );
};

export default EnkeltInnsending;
