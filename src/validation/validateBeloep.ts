import isNumericString from '../utils/isNumericString';

const validateBeloep = (beloep: string | undefined, max: number, required: boolean = false): string | undefined => {
  if (beloep === undefined || beloep.length === 0) {
    return required ? 'Mangler beløp' : undefined;
  }

  if (!isNumericString(beloep)) {
    return required ? 'Oppgi beløp med kun tall' : undefined;
  }

  if (parseInt(beloep) > max) {
    return required ? 'For høyt beløp' : undefined;
  }
};

export default validateBeloep;
