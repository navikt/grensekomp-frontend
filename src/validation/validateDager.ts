import isNumericString from '../utils/isNumericString';

const validateDager = (dager: string | undefined, max: number, required: boolean): string | undefined => {
  if (dager === undefined) {
    return required ? 'Mangler antall' : undefined;
  }

  if (!isNumericString(dager)) {
    return required ? 'Bruk kun tall' : undefined;
  }

  if (parseInt(dager) > max) {
    return required ? 'For høy verdi' : undefined;
  }
};

export default validateDager;
