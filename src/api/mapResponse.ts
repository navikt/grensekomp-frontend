import ValidationResponse from './ValidationResponse';
import HttpStatus from './HttpStatus';
import map201 from '../state/validation/map201';
import map400 from '../state/validation/map400';
import map401 from '../state/validation/map401';
import map422 from '../state/validation/map422';
import map500 from '../state/validation/map500';
import { ValidationState } from '../state/validation/ValidationState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import map200 from '../state/validation/map200';

const mapResponse = (
  response: ValidationResponse,
  state: ValidationState,
  mapFeilmeldinger: (response: ValidationResponse, state: ValidationState) => FeiloppsummeringFeil[]
): ValidationState => {
  const nextState = Object.assign({}, state);
  switch (response.status) {
    case HttpStatus.Successfully:
      nextState.feilmeldinger = mapFeilmeldinger(response, nextState);
      return map200(nextState, response);
    case HttpStatus.Created:
      return map201(nextState);
    case HttpStatus.BadRequest:
      return map400(nextState);
    case HttpStatus.Unauthorized:
      return map401(nextState);
    case HttpStatus.UnprocessableEntity:
      nextState.feilmeldinger = mapFeilmeldinger(response, nextState);
      return map422(nextState);
    case HttpStatus.Error:
      return map500(nextState);
    default:
      return nextState;
  }
};

export default mapResponse;
