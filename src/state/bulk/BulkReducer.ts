import BulkState, { defaultBulkState, MAX_ITEMS } from './BulkState';
import { Actions, BulkActions } from './BulkActions';
import { v4 as uuid } from 'uuid';
import validateBulk from './validateBulk';
import mapBulkValidationResponse from '../../components/bulk/mapBulkValidationResponse';
import mapFeilOppsummeringsFeil from '../../components/bulk/mapFeilOppsummering';
import HttpStatus from '../../api/HttpStatus';
import { toDato } from '../../utils/dato/toDato';

const checkItemId = (itemId?: string) => {
  if (itemId === undefined) {
    throw new Error('itemId kan ikke være undefined');
  }
};

const BulkReducer = (state: BulkState, action: BulkActions): BulkState => {
  const nextState = Object.assign({}, state);
  const { payload, i18n } = action;
  nextState.items = nextState.items ? nextState.items : [{ uniqueKey: uuid() }];

  switch (action.type) {
    case Actions.Orgnr:
      nextState.orgnr = payload?.orgnr;
      return validateBulk(nextState, i18n);

    case Actions.Fnr:
      checkItemId(payload?.itemId);
      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.fnr = payload?.fnr;
      return validateBulk(nextState, i18n);

    case Actions.Fra:
      checkItemId(payload?.itemId);

      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.fom = payload?.fra
        ? toDato(payload.fra)
        : undefined;
      return validateBulk(nextState, i18n);

    case Actions.Til:
      checkItemId(payload?.itemId);

      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.tom = payload?.til
        ? toDato(payload.til)
        : undefined;
      return validateBulk(nextState, i18n);

    case Actions.Beloep:
      checkItemId(payload?.itemId);
      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.beloep = payload?.beloep;
      return validateBulk(nextState, i18n);

    case Actions.Land:
      checkItemId(payload?.itemId);
      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.land = payload?.land;
      return validateBulk(nextState, i18n);

    case Actions.Bekreft:
      nextState.bekreft = payload?.bekreft;
      return validateBulk(nextState, i18n);

    case Actions.Progress:
      nextState.progress = payload?.progress;
      return validateBulk(nextState, i18n);

    case Actions.Kvittering:
      nextState.kvittering = payload?.kvittering;
      return validateBulk(nextState, i18n);

    case Actions.NotAuthorized:
      nextState.notAuthorized = false;
      return nextState;

    case Actions.Validate:
      nextState.validated = true;
      const validatedState = validateBulk(nextState, i18n);
      validatedState.submitting = validatedState.feilmeldinger?.length === 0;
      validatedState.progress = validatedState.submitting;
      return validatedState;

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

      mapBulkValidationResponse(payload.response, nextState);

      nextState.feilmeldinger = mapFeilOppsummeringsFeil(nextState);
      nextState.error = nextState.feilmeldinger.length > 0;
      nextState.kvittering = !nextState.error;
      nextState.validated = true;

      return nextState;

    case Actions.AddItem:
      if (nextState.items.length >= MAX_ITEMS) {
        return nextState;
      }
      nextState.items.push({
        uniqueKey: uuid(),
        fnr: '',
        beloep: ''
      });
      return nextState;

    case Actions.DeleteItem:
      checkItemId(payload?.itemId);
      nextState.items = state.items?.filter((i) => i.uniqueKey !== payload!!.itemId);
      return validateBulk(nextState, i18n);

    case Actions.Reset:
      return Object.assign({}, defaultBulkState());

    default:
      throw new Error(`Ugyldig action: ${action.type}`);
  }
};

export default BulkReducer;
