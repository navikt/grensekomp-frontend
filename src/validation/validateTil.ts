import { Dato } from '../utils/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';

export const validateTil = (
  fra: Dato | undefined,
  til: Dato | undefined,
  required: boolean = false
): string | undefined => {
  if (!til?.value) {
    return required ? 'Mangler til dato' : undefined;
  }

  if (required && til?.value && isBeforeMinDate(til)) {
    return 'Dato kan bare være fra og med 29.01.2021';
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
