import ValidationResult from './ValidationResult';
import { i18n } from 'i18next';

const formatValidation = (validationResult: ValidationResult | undefined, i18n: i18n): string | undefined => {
  if (!validationResult) {
    return;
  }
  if (validationResult.value === undefined) {
    return i18n.t(validationResult.key);
  }
  return i18n.t(validationResult.key, validationResult.value);
};

export default formatValidation;
