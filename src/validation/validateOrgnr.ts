import isValidOrgnr from '../utils/isValidOrgnr';
import Key from '../locales/Key';
import ValidationResult from './ValidationResult';

export const validateOrgnr = (orgnr?: string, required: boolean = false): ValidationResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: Key.ORGNR_MISSSING } : undefined;
  }
  if (!isValidOrgnr(orgnr)) {
    return required ? { key: Key.ORGNR_INVALID } : undefined;
  }
};
