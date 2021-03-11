import ValidationResponse from '../../api/ValidationResponse';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { lagFeil } from '../lagFeil';
import BulkState from './BulkState';
import { getIndexByProperyPath } from './getIndexByPropertyPath';
import { getSubName } from './getSubName';

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
    }
    if (v.propertyPath.startsWith('perioder')) {
      const index = getIndexByProperyPath(v.propertyPath);
      const sub = getSubName(v.propertyPath, index);
      if (state.items !== undefined) {
        const item = state.items[index];

        if (sub === 'fom') {
          item.fomError = v.message;
          feilmeldinger.push(lagFeil('fom_' + item.uniqueKey, v.message));
        }
        if (sub === 'tom') {
          item.tomError = v.message;
          feilmeldinger.push(lagFeil('tom_' + item.uniqueKey, v.message));
        }
      }
    }
  });
  return feilmeldinger;
};

export default mapBulkFeilmeldinger;
