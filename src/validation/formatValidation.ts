import ValidationResult from './ValidationResult';
import { i18n as i18nInterface } from 'i18next';

const formatValidation = (validationResult: ValidationResult | undefined, i18n: i18nInterface): string | undefined => {
  if (!validationResult) {
    return;
  }
  if (validationResult.value === undefined) {
    return i18n.t(validationResult.key);
  }
  return i18n.t(validationResult.key, validationResult.value);
};

export default formatValidation;
