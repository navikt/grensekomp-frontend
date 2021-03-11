import BulkState, { defaultBulkState } from './BulkState';
import { Actions, BulkActions } from './BulkActions';
import { parseDateTilDato } from '../../utils/Dato';
import { v4 as uuid } from 'uuid';
import validateBulk from './validateBulk';
import mapResponse from '../../api/mapResponse';
import mapBulkFeilmeldinger from './mapBulkFeilmeldinger';

const findItemByUniqueKey = (bulkState: BulkState, uniqueKey: string) =>
  bulkState.items?.find((item) => item.uniqueKey === uniqueKey);

const BulkReducer = (state: BulkState, action: BulkActions): BulkState => {
  const nextState = Object.assign({}, state);
  const { payload } = action;
  nextState.items = nextState.items ? nextState.items : [{ uniqueKey: uuid() }];

  switch (action.type) {
    case Actions.Orgnr:
      nextState.orgnr = payload?.orgnr;
      return validateBulk(nextState);

    case Actions.Fnr:
      if (payload?.itemId === undefined) {
        throw new Error('itemId kan ikke være undefined');
      }
      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.fnr = payload.fnr;
      return validateBulk(nextState);

    case Actions.Fra:
      if (payload?.itemId === undefined) {
        throw new Error('itemId kan ikke være undefined');
      }
      if (payload?.fra === undefined) {
        nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.fom = undefined;
      } else {
        nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.fom = parseDateTilDato(payload.fra);
      }
      return validateBulk(nextState);

    case Actions.Til:
      if (payload?.itemId === undefined) {
        throw new Error('itemId kan ikke være undefined');
      }
      if (payload?.til === undefined) {
        nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.tom = undefined;
      } else {
        nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.tom = parseDateTilDato(payload.til);
      }
      return validateBulk(nextState);

    case Actions.Dager:
      if (payload?.itemId === undefined) {
        throw new Error('itemId kan ikke være undefined');
      }
      nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.dager = payload.dager;
      return validateBulk(nextState);

    case Actions.Beloep:
      if (payload?.itemId !== undefined) {
        nextState.items.find((item) => item.uniqueKey === payload?.itemId)!.beloep = payload.beloep;
      }
      return validateBulk(nextState);

    case Actions.Bekreft:
      nextState.bekreft = payload?.bekreft;
      return validateBulk(nextState);

    case Actions.Progress:
      nextState.progress = payload?.progress;
      return validateBulk(nextState);

    case Actions.Kvittering:
      nextState.kvittering = payload?.kvittering;
      return validateBulk(nextState);

    case Actions.NotAuthorized:
      nextState.notAuthorized = false;
      return nextState;

    case Actions.Validate:
      nextState.validated = true;
      const validatedState = validateBulk(nextState);
      validatedState.submitting = validatedState.feilmeldinger?.length === 0;
      validatedState.progress = validatedState.submitting;
      return validatedState;

    case Actions.HandleResponse:
      if (payload?.response == undefined) {
        throw new Error('Du må spesifisere response');
      }
      nextState.validated = false;
      nextState.progress = false;
      nextState.submitting = false;
      return mapResponse(payload.response, nextState, mapBulkFeilmeldinger) as BulkState;

    case Actions.AddItem:
      const key = uuid();
      nextState.items = nextState.items ? [...nextState.items, { uniqueKey: key }] : [{ uniqueKey: key }];
      return nextState;

    case Actions.DeleteItem:
      if (payload?.itemId === undefined) {
        throw Error('Missing itemid');
      }
      nextState.items = state.items?.filter((i) => i.uniqueKey !== payload.itemId);
      return nextState;

    case Actions.Reset:
      return Object.assign({}, defaultBulkState());

    default:
      throw new Error(`Ugyldig action: ${action.type}`);
  }
};

export default BulkReducer;
