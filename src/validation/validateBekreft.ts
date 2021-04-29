import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

const validateBekreft = (bekreft?: boolean, required: boolean = false): ValidationResult | undefined => {
  if (required === false) {
    return;
  }
  if (bekreft !== true) {
    return {
      key: Key.BEKREFT
    };
  }
  return;
};

export default validateBekreft;
