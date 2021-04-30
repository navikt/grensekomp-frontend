import isValidFnr from '../utils/isValidFnr';
import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

export const validateFnr = (orgnr?: string, required: boolean = false): ValidationResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: Key.FNR_MISSING } : undefined;
  }
  if (!isValidFnr(orgnr)) {
    return required ? { key: Key.FNR_INVALID } : undefined;
  }
};
