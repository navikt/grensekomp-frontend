import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import { minDate } from '../config/dager';
import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

export const validateTil = (
  fra: Dato | undefined,
  til: Dato | undefined,
  required: boolean = false
): ValidationResult | undefined => {
  if (!til?.value) {
    return required ? { key: Key.TIL_MISSING } : undefined;
  }

  if (required && til?.value && isBeforeMinDate(til)) {
    return {
      key: Key.TIL_INVALID,
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (!fra || !til) {
    return;
  }

  if (!required) {
    return;
  }
  if (fra.error || !fra.millis) {
    return { key: Key.FOM_ERROR };
  }
  if (til.error || !til.millis) {
    return { key: Key.TIL_ERROR };
  }
  if (fra.millis > til.millis) {
    return { key: Key.TIL_TOO_EARLY };
  }
};

export default validateTil;
