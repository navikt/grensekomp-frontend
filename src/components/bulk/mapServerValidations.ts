import ValidationResponse from '../../api/ValidationResponse';
import BulkState from './BulkState';
import { getIndexByProperyPath } from '../../utils/getIndexByPropertyPath';
import { getSubName } from '../../utils/getSubName';

const mapServerValidations = (response: ValidationResponse, state: BulkState) => {
  response.violations.forEach((v) => {
    if (state.items === undefined) {
      throw Error('Mangler violation items');
    }
    const rowIndex = v.frontendIndex;
    if (rowIndex === undefined) {
      throw Error('Mangler frontendIndex');
    }
    const item = state.items[rowIndex];
    switch (v.propertyPath) {
      case 'virksomhetsnummer':
        state.orgnrError = v.message || v.validationType;
        break;

      case 'perioder':
        item.dagerError = v.message || v.validationType;
        break;

      default:
        if (v.propertyPath.startsWith('perioder')) {
          const index = getIndexByProperyPath(v.propertyPath);
          const subProperty = getSubName(v.propertyPath, index);

          if (subProperty === 'fom') {
            item.fomError = v.message || v.validationType;
          }

          if (subProperty === 'tom') {
            item.tomError = v.message || v.validationType;
          }

          if (subProperty === 'antallDagerMedRefusjon') {
            item.dagerError = v.message || v.validationType;
          }

          if (subProperty === 'beloep') {
            item.beloepError = v.message || v.validationType;
          }
        }
        break;
    }
  });
};

export default mapServerValidations;
