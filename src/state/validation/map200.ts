import { ValidationState } from './ValidationState';
import ValidationResponse from './ValidationResponse';

/**
 * Some ok - some not
 */
const map200 = (state: ValidationState, response: ValidationResponse): ValidationState => {
  state.kvittering = state.feilmeldinger.length === 0;
  state.progress = false;
  state.serverError = false;
  state.error = false;
  return state;
};

export default map200;
