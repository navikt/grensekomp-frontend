import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import { minDate } from '../config/dager';
import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

export const validateFra = (fra: Dato | undefined, required: boolean = false): ValidationResult | undefined => {
  if (required && !fra?.value) {
    return { key: Key.FOM_MISSING };
  }

  if (required && fra?.value && isBeforeMinDate(fra)) {
    return {
      key: Key.FOM_INVALID,
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (fra && fra.error) {
    return required ? { key: Key.FOM_ERROR } : undefined;
  }
};

export default validateFra;
