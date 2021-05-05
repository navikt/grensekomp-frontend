import ValidationResult from './ValidationResult';
import LangKey from '../locales/LangKey';

const validateBekreft = (bekreft?: boolean, required: boolean = false): ValidationResult | undefined => {
  if (required === false) {
    return;
  }
  if (bekreft !== true) {
    return {
      key: LangKey.BEKREFT
    };
  }
};

export default validateBekreft;
