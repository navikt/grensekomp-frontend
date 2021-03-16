import BulkState from './BulkState';
import { getIndexByProperyPath } from '../../utils/getIndexByPropertyPath';
import { getSubName } from '../../utils/getSubName';
import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import findNotAccepted from './findNotAccepted';
import BulkValidationStatus from '../../api/bulk/BulkValidationStatus';

const mapBulkValidationResponse = (response: BulkValidationResponse, state: BulkState) => {
  const items = findNotAccepted(state.items);
  response.validationResponses.forEach((bulkValidation, rowIndex) => {
    if (bulkValidation.status === BulkValidationStatus.OK) {
      // Godkjent
      items[rowIndex].accepted = true;
    }
    if (bulkValidation.status === BulkValidationStatus.Error) {
      // Valideringsfeil
      items[rowIndex].accepted = false;
      bulkValidation.validationErrors?.forEach((v) => {
        const item = state.items[rowIndex];
        switch (v.propertyPath) {
          case 'virksomhetsnummer':
            state.orngrError = v.message || v.validationType;
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
    }
  });
};

export default mapBulkValidationResponse;
