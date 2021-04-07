import BulkState from '../../state/bulk/BulkState';
import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import findNotAccepted from './findNotAccepted';
import BulkValidationStatus from '../../api/bulk/BulkValidationStatus';

const UKJENT_FEIL = 'Ukjent feil';

const mapBulkValidationResponse = (response: BulkValidationResponse, state: BulkState): BulkState => {
  const items = findNotAccepted(state.items);
  response.validationResponses.forEach((bulkValidation, rowIndex) => {
    const item = items[rowIndex];
    if (bulkValidation.status === BulkValidationStatus.Generic) {
      item.accepted = false;
      item.genericError = 'Det oppstod en ukjent feil';
    }

    if (bulkValidation.status === BulkValidationStatus.OK) {
      item.accepted = true;
    }
    if (bulkValidation.status === BulkValidationStatus.Error) {
      item.accepted = false;
      bulkValidation.validationErrors?.forEach((v) => {
        switch (v.propertyPath) {
          case 'virksomhetsnummer':
            state.orgnrError = v.message || UKJENT_FEIL;
            break;

          case 'identitetsnummer':
            item.fnrError = v.message || UKJENT_FEIL;
            break;

          case 'periode':
            item.dagerError = v.message || UKJENT_FEIL;
            break;

          case 'periode.antallDagerMedRefusjon':
            item.dagerError = v.message || UKJENT_FEIL;
            break;

          case 'periode.beloep':
            item.beloepError = v.message || UKJENT_FEIL;
            break;

          case 'periode.fom':
            item.fomError = v.message || UKJENT_FEIL;
            break;

          case 'periode.tom':
            item.tomError = v.message || UKJENT_FEIL;
            break;

          default:
            item.genericError = v.message || UKJENT_FEIL;
            break;
        }
      });
    }
  });
  return state;
};

export default mapBulkValidationResponse;
