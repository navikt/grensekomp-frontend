import BulkState from './BulkState';
import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import findNotAccepted from './findNotAccepted';
import BulkValidationStatus from '../../api/bulk/BulkValidationStatus';

const mapBulkValidationResponse = (response: BulkValidationResponse, state: BulkState) => {
  const items = findNotAccepted(state.items);
  response.validationResponses.forEach((bulkValidation, rowIndex) => {
    const item = items[rowIndex];

    if (bulkValidation.status === BulkValidationStatus.OK) {
      item.accepted = true;
    }
    if (bulkValidation.status === BulkValidationStatus.Error) {
      item.accepted = false;
      bulkValidation.validationErrors?.forEach((v) => {
        switch (v.propertyPath) {
          case 'virksomhetsnummer':
            state.orgnrError = v.message || v.validationType;
            break;

          case 'identitetsnummer':
            item.fnrError = v.message || 'Ukjent feil';
            break;

          case 'periode':
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
