import isNumericString from '../utils/isNumericString';
import { Dato } from '../utils/dato/Dato';
import dayjs from 'dayjs';
import { datoToString } from '../utils/dato/datoToString';
import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

const validateDager = (
  dager: string | undefined,
  max: number,
  required: boolean | undefined,
  fra: Dato | undefined,
  til: Dato | undefined
): ValidationResult | undefined => {
  if (!required) {
    return undefined;
  }
  if (dager === undefined || dager.length === 0) {
    return { key: Key.DAY_MISSING };
  }

  if (!isNumericString(dager)) {
    return { key: Key.DAY_DIGITS_ONLY };
  }

  if (parseInt(dager) > max) {
    return { key: Key.DAY_TOO_HIGH };
  }

  if (
    fra &&
    til &&
    parseInt(dager) > dayjs(datoToString(til), 'DD.MM.YYYY').diff(dayjs(datoToString(fra), 'DD.MM.YYYY'), 'day') + 1
  ) {
    return { key: Key.DAY_INVALID };
  }
};

export default validateDager;
