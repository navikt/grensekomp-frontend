import BulkState from './BulkState';
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

          case 'periode.antallDagerMedRefusjon':
            item.dagerError = v.message || v.validationType;
            break;

          case 'periode.beloep':
            item.beloepError = v.message || v.validationType;
            break;

          case 'periode.fom':
            item.fomError = v.message || v.validationType;
            break;

          case 'periode.tom':
            item.tomError = v.message || v.validationType;
            break;
        }
      });
    }
  });
};

export default mapBulkValidationResponse;
