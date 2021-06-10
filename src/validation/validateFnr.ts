import isValidFnr from '../utils/isValidFnr';
import ValidationResult from './ValidationResult';
import LangKey from '../language/LangKey';

export const validateFnr = (orgnr?: string, required: boolean = false): ValidationResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: LangKey.FNR_MISSING } : undefined;
  }
  if (!isValidFnr(orgnr)) {
    return required ? { key: LangKey.FNR_INVALID } : undefined;
  }
};
