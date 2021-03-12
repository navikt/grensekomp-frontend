import ValidationResponse from '../../api/ValidationResponse';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { lagFeil } from '../lagFeil';
import BulkState from './BulkState';
import { getIndexByProperyPath } from '../../utils/getIndexByPropertyPath';
import { getSubName } from '../../utils/getSubName';

const mapBulkFeilmeldinger = (response: ValidationResponse, state: BulkState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  response.violations.forEach((v) => {
    switch (v.propertyPath) {
      case 'virksomhetsnummer':
        state.orngrError = v.message;
        feilmeldinger.push(lagFeil('orgnr', v.message));
        break;

      case 'antallDagerMedRefusjon':
        feilmeldinger.push(lagFeil('bekreft', v.message));
        break;

      case 'perioder':
        feilmeldinger.push(lagFeil('perioder', v.message || v.validationType));
        break;

      default:
        if (v.propertyPath.startsWith('perioder')) {
          const index = getIndexByProperyPath(v.propertyPath);
          const subProperty = getSubName(v.propertyPath, index);
          const rowIndex = v.frontendIndex;
          if (state.items !== undefined) {
            const item = state.items[rowIndex || 0];

            if (subProperty === 'fom') {
              item.fomError = v.message;
              feilmeldinger.push(lagFeil('fom_' + item.uniqueKey, v.message));
            }
            if (subProperty === 'tom') {
              item.tomError = v.message;
              feilmeldinger.push(lagFeil('tom_' + item.uniqueKey, v.message));
            }

            if (subProperty === 'beloep') {
              item.tomError = v.message;
              feilmeldinger.push(lagFeil('beloep_' + item.uniqueKey, v.message));
            }
          }
          break;
        }
        // Fallback - unknown error
        feilmeldinger.push(lagFeil('ukjent', 'Ukjent feil: ' + v.message || v.validationType));
        break;
    }
  });
  return feilmeldinger;
};

export default mapBulkFeilmeldinger;
