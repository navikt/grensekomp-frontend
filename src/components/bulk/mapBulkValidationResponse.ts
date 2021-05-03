import BulkState from '../../state/bulk/BulkState';
import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import findNotAccepted from './findNotAccepted';
import BulkValidationStatus from '../../api/bulk/BulkValidationStatus';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

const mapBulkValidationResponse = (response: BulkValidationResponse, state: BulkState): BulkState => {
  const { t } = useTranslation();
  const items = findNotAccepted(state.items);
  response.validationResponses.forEach((bulkValidation, rowIndex) => {
    const item = items[rowIndex];
    if (bulkValidation.status === BulkValidationStatus.Generic) {
      item.accepted = false;
      item.genericError = t(Key.ERROR_GENERIC);
    }

    if (bulkValidation.status === BulkValidationStatus.OK) {
      item.accepted = true;
    }
    if (bulkValidation.status === BulkValidationStatus.Error) {
      item.accepted = false;
      bulkValidation.validationErrors?.forEach((v) => {
        switch (v.propertyPath) {
          case 'virksomhetsnummer':
            state.orgnrError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          case 'identitetsnummer':
            item.fnrError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          case 'periode.beregnetMånedsinntekt':
            item.beloepError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          case 'periode.fom':
          case 'fom':
            item.fomError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          case 'periode.tom':
          case 'tom':
            item.tomError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          case 'periode.dagsats':
            item.tomError = v.message || t(Key.ERROR_UNKNOWN);
            break;

          default:
            item.genericError = v.message || t(Key.ERROR_UNKNOWN);
            break;
        }
      });
    }
  });
  return state;
};

export default mapBulkValidationResponse;
