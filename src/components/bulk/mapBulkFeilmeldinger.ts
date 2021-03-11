import ValidationResponse from '../../api/ValidationResponse';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { lagFeil } from '../lagFeil';
import BulkState from './BulkState';

const mapBulkFeilmeldinger = (response: ValidationResponse, state: BulkState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  response.violations.forEach((v) => {
    switch (v.propertyPath) {
      case 'virksomhetsnummer':
        state.orngrError = v.message;
        feilmeldinger.push(lagFeil('orgnr', v.message));
        break;

      case 'bekreftet':
        state.bekreftError = v.message;
        feilmeldinger.push(lagFeil('bekreft', v.message));
        break;
    }
  });
  return feilmeldinger;
};

export default mapBulkFeilmeldinger;
