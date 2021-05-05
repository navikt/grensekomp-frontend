import isValidOrgnr from '../utils/isValidOrgnr';
import LangKey from '../locales/LangKey';
import ValidationResult from './ValidationResult';

export const validateOrgnr = (orgnr?: string, required: boolean = false): ValidationResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: LangKey.ORGNR_MISSSING } : undefined;
  }
  if (!isValidOrgnr(orgnr)) {
    return required ? { key: LangKey.ORGNR_INVALID } : undefined;
  }
};
