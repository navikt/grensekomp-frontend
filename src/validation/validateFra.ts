import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import { minDate } from '../config/dager';
import ValidationResult from './ValidationResult';
import LangKey from '../locale/LangKey';

export const validateFra = (fra: Dato | undefined, required: boolean = false): ValidationResult | undefined => {
  if (required && !fra?.value) {
    return { key: LangKey.FOM_MISSING };
  }

  if (required && fra?.value && isBeforeMinDate(fra)) {
    return {
      key: LangKey.FOM_INVALID,
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (fra && fra.error) {
    return required ? { key: LangKey.FOM_ERROR } : undefined;
  }
};

export default validateFra;
