import BulkState, { defaultBulkState } from './BulkState';
import { Actions, BulkActions, Payload } from './BulkActions';
import { parseDateTilDato } from '../../utils/Dato';
import { v4 as uuid } from 'uuid';

const BulkReducer = (state: BulkState, action: BulkActions): BulkState => {
  const nextState = Object.assign({}, state);
  const { payload } = action;
  nextState.items = nextState.items ? nextState.items : [{ uniqueKey: uuid() }];

  switch (action.type) {
    case Actions.Orgnr:
      nextState.orgnr = payload?.orgnr;
      return nextState; // validateBulk(nextState);

    case Actions.Fnr:
      if (payload?.itemId !== undefined) {
        nextState.items[payload.itemId].fnr = payload.fnr;
      }
      return nextState; // validateBulk(nextState);

    case Actions.Fra:
      if (payload?.itemId !== undefined) {
        if (payload?.fra === undefined) {
          nextState.items[payload.itemId].fom = undefined;
        } else {
          nextState.items[payload.itemId].fom = parseDateTilDato(payload.fra);
        }
      }

      return nextState; // validateBulk(nextState);

    case Actions.Til:
      if (payload?.itemId !== undefined) {
        if (payload?.til === undefined) {
          nextState.items[payload.itemId].tom = undefined;
        } else {
          nextState.items[payload.itemId].tom = parseDateTilDato(payload.til);
        }
      }
      return nextState; // validateBulk(nextState);

    case Actions.Dager:
      if (payload?.itemId !== undefined) {
        nextState.items[payload?.itemId].dager = payload?.dager;
      }
      return nextState; // validateBulk(nextState);

    case Actions.Beloep:
      if (payload?.itemId !== undefined) {
        nextState.items[payload.itemId].beloep = payload?.beloep;
      }
      return nextState; // validateBulk(nextState);

    case Actions.Bekreft:
      nextState.bekreft = payload?.bekreft;
      return nextState; // validateBulk(nextState);

    case Actions.Progress:
      nextState.progress = payload?.progress;
      return nextState; // validateBulk(nextState);

    case Actions.Kvittering:
      nextState.kvittering = payload?.kvittering;
      return nextState; // validateBulk(nextState);

    case Actions.NotAuthorized:
      nextState.notAuthorized = false;
      return nextState;

    // case Actions.Validate:
    //   nextState.validated = true;
    //   const validatedState = validateBulk(nextState);
    //   validatedState.isOpenKontrollsporsmaalLonn = showKontrollsporsmaalLonn(validatedState);
    //   validatedState.submitting = validatedState.feilmeldinger?.length === 0;
    //   validatedState.progress = validatedState.submitting;
    //   return validatedState;

    // case Actions.HandleResponse:
    //   if (payload?.response == undefined) {
    //     throw new Error('Du må spesifisere response');
    //   }
    //   nextState.validated = false;
    //   nextState.progress = false;
    //   nextState.submitting = false;
    //   return mapResponse(payload.response, nextState, mapBulkFeilmeldinger) as BulkState;

    // case Actions.OpenKontrollsporsmaalLonn:
    //   nextState.isOpenKontrollsporsmaalLonn = true;
    //   return nextState;
    //
    // case Actions.CloseKontrollsporsmaalLonn:
    //   nextState.isOpenKontrollsporsmaalLonn = false;
    //   return nextState;

    case Actions.AddItem:
      const key = uuid();
      nextState.items = nextState.items ? [...nextState.items, { uniqueKey: key }] : [{ uniqueKey: key }];
      return nextState;

    case Actions.DeleteItem:
      if (payload?.itemId) {
        nextState.items.splice(payload?.itemId, 1);
      }

      return nextState;

    case Actions.Reset:
      return Object.assign({}, defaultBulkState());

    default:
      throw new Error(`Ugyldig action: ${action.type}`);
  }
};

export default GravidKravReducer;
