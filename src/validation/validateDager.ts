import isNumericString from '../utils/isNumericString';

const validateDager = (dager: string | undefined, max: number, required: boolean = false): string | undefined => {
  if (dager === undefined || dager.length === 0) {
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
