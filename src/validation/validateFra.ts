import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import { minDate } from '../config/dager';

export const validateFra = (fra: Dato | undefined, required: boolean = false): string | undefined => {
  if (required && !fra?.value) {
    return 'Mangler fra dato';
  }

  if (required && fra?.value && isBeforeMinDate(fra)) {
    return `Dato kan bare være fra og med ${minDate.toLocaleDateString('nb')}`;
  }

  if (fra && fra.error) {
    return required ? fra.error : undefined;
  }
};

export default validateFra;
