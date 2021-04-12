import BulkState, { defaultOversiktKravState } from './OversiktKravState';
import { Actions, OversiktKravActions } from './OversiktKravActions';
import validateOversiktKrav from './validateOversiktKrav';
import mapFeilOppsummeringsFeil from '../../components/oversikt-krav/mapFeilOppsummering';
import HttpStatus from '../../api/HttpStatus';

const checkItemId = (itemId?: string) => {
  if (itemId === undefined) {
    throw new Error('itemId kan ikke være undefined');
  }
};

const BulkReducer = (state: BulkState, action: OversiktKravActions): BulkState => {
  const nextState = Object.assign({}, state);
  const { payload } = action;
  // nextState.items = nextState.items ? nextState.items : [{ uniqueKey: uuid() }];

  switch (action.type) {
    case Actions.Progress:
      nextState.progress = payload?.progress;
      return validateOversiktKrav(nextState);

    case Actions.Kvittering:
      nextState.kvittering = payload?.kvittering;
      return validateOversiktKrav(nextState);

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

      // mapBulkValidationResponse(payload.response, nextState);

      const payloadItems = payload.response.json;
      nextState.items = payloadItems;

      nextState.feilmeldinger = mapFeilOppsummeringsFeil(nextState);
      nextState.error = nextState.feilmeldinger.length > 0;
      nextState.kvittering = !nextState.error;
      nextState.validated = true;

      return nextState;

    case Actions.HandleResponseError:
      // eslint-disable-next-line
      console.log('Ting gikk sjit:', payload?.response);
      return nextState;

    case Actions.DeleteItem:
      checkItemId(payload?.itemId);
      nextState.items = state.items?.filter((i) => i.id !== payload!!.itemId);
      return validateOversiktKrav(nextState);

    case Actions.Reset:
      return Object.assign({}, defaultOversiktKravState());

    default:
      throw new Error(`Ugyldig action: ${action.type}`);
  }
};

export default BulkReducer;
