import BulkState, { defaultOversiktKravState } from './OversiktKravState';
import { Actions, OversiktKravActions } from './OversiktKravActions';
import mapFeilOppsummeringsFeil from '../../components/oversikt-krav/mapFeilOppsummering';
import HttpStatus from '../../api/HttpStatus';

const checkId = (id?: string) => {
  if (id === undefined) {
    throw new Error('id kan ikke være undefined');
  }
};

const OversiktKravReducer = (state: BulkState, action: OversiktKravActions): BulkState => {
  const nextState = Object.assign({}, state);
  const { payload } = action;

  switch (action.type) {
    case Actions.Progress:
      nextState.progress = payload?.progress;
      return nextState;

    case Actions.NotAuthorized:
      nextState.notAuthorized = false;
      return nextState;

    case Actions.KravSelected:
      nextState.activtKrav = payload?.krav;
      return nextState;

    case Actions.KravUnselected:
      nextState.activtKrav = undefined;
      return nextState;

    case Actions.HandleResponse:
      if (payload?.response == undefined) {
        throw new Error('Du må spesifisere response');
      }

      if (payload.response.status === HttpStatus.Unauthorized) {
        nextState.notAuthorized = true;
        nextState.progress = false;
        nextState.submitting = false;
        return nextState;
      }

      nextState.progress = false;
      nextState.submitting = false;

      const payloadItems = payload.response.json;
      nextState.items = payloadItems;

      nextState.feilmeldinger = mapFeilOppsummeringsFeil(nextState);
      nextState.error = nextState.feilmeldinger.length > 0;
      nextState.kvittering = !nextState.error;
      nextState.validated = true;
      nextState.serverError = false;

      return nextState;

    case Actions.HandleResponseError:
      nextState.serverError = true;
      return nextState;

    case Actions.HideServerError:
      nextState.serverError = false;
      return nextState;

    case Actions.DeleteItem:
      checkId(payload?.id);
      nextState.items = state.items?.filter((i) => i.id !== payload!!.id);
      return nextState;

    case Actions.Reset:
      return Object.assign({}, defaultOversiktKravState());

    default:
      throw new Error(`Ugyldig action: ${action.type}`);
  }
};

export default OversiktKravReducer;
