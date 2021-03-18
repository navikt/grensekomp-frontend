import isNumericString from '../utils/isNumericString';
import { Dato, datoToString } from '../utils/Dato';
import dayjs from 'dayjs';

const validateDager = (
  dager: string | undefined,
  max: number,
  required: boolean | undefined,
  fra: Dato | undefined,
  til: Dato | undefined
): string | undefined => {
  if (!required) {
    return undefined;
  }
  if (dager === undefined || dager.length === 0) {
    return 'Mangler antall';
  }

  if (!isNumericString(dager)) {
    return 'Bruk kun tall';
  }

  if (parseInt(dager) > max) {
    return 'For høy verdi';
  }

  if (
    fra &&
    til &&
    parseInt(dager) > dayjs(datoToString(til), 'DD.MM.YYYY').diff(dayjs(datoToString(fra), 'DD.MM.YYYY'), 'day')
  ) {
    return 'Antall refusjonsdager kan ikke være flere enn dagene i perioden';
  }
};

export default validateDager;
