import isNumericString from '../utils/isNumericString';
import ValidationResult from './ValidationResult';
import LangKey from '../locales/LangKey';

const validateBeloep = (
  beloep: string | undefined,
  max: number,
  required: boolean = false
): ValidationResult | undefined => {
  if (beloep === undefined || beloep.length === 0) {
    return required ? { key: LangKey.AMOUNT_MISSING } : undefined;
  }

  if (!isNumericString(beloep)) {
    return required ? { key: LangKey.AMOUNT_NOT_NUMERIC } : undefined;
  }

  if (parseInt(beloep) > max) {
    return required ? { key: LangKey.AMOUNT_TOO_HIGH } : undefined;
  }
};

export default validateBeloep;
