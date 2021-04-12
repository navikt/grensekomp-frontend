import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import BulkValidationStatus from '../../api/bulk/BulkValidationStatus';
import OversiktKravState from '../../state/oversikt-krav/OversiktKravState';

const UKJENT_FEIL = 'Ukjent feil';

const mapOversiktKravValidationResponse = (
  response: BulkValidationResponse,
  state: OversiktKravState
): OversiktKravState => {
  const items = state.items;
  response.validationResponses.forEach((bulkValidation, rowIndex) => {
    if (bulkValidation.status === BulkValidationStatus.Error) {
    }
  });
  return state;
};

export default mapOversiktKravValidationResponse;
