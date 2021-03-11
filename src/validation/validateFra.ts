import { Dato } from '../utils/Dato';
import isAfterMinDate from '../utils/isAfterMinDate';

export const validateFra = (fra: Dato | undefined, required: boolean): string | undefined => {
  if (!fra?.value) {
    return required ? 'Mangler fra dato' : undefined;
  }

  if (required && isAfterMinDate(fra)) {
    return 'Dato kan bare være fra og med 29.01.2021';
  }

  if (fra && fra.error) {
    return required ? fra.error : undefined;
  }
};

export default validateFra;
