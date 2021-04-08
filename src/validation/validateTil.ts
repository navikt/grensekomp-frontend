import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import { minDate } from '../config/dager';

export const validateTil = (
  fra: Dato | undefined,
  til: Dato | undefined,
  required: boolean = false
): string | undefined => {
  if (!til?.value) {
    return required ? 'Mangler til dato' : undefined;
  }

  if (required && til?.value && isBeforeMinDate(til)) {
    return `Dato kan bare være fra og med ${minDate.toLocaleDateString('nb')}`;
  }

  if (!fra || !til) {
    return;
  }

  if (!required) {
    return;
  }
  if (fra.error || !fra.millis) {
    return fra.error;
  }
  if (til.error || !til.millis) {
    return til.error;
  }
  if (fra.millis > til.millis) {
    return 'Til dato kan ikke være før fra dato';
  }
};

export default validateTil;
