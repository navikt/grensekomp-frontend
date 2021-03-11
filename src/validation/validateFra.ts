import { Dato } from '../utils/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';

export const validateFra = (fra: Dato | undefined, required: boolean = false): string | undefined => {
  if (required && !fra?.value) {
    return 'Mangler fra dato';
  }

  if (required && fra?.value && isBeforeMinDate(fra)) {
    return 'Dato kan bare være fra og med 29.01.2021';
  }

  if (fra && fra.error) {
    return required ? fra.error : undefined;
  }
};

export default validateFra;
