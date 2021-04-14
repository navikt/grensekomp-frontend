import OversiktKravPayload from './OversiktKravPayload';

export enum Actions {
  Reset,
  Fnr,
  Orgnr,
  Fra,
  Til,
  Dager,
  Beloep,
  Land,
  Bekreft,
  Validate,
  Progress,
  HandleResponse,
  Kvittering,
  NotAuthorized,
  KontrollDager,
  AddItem,
  UpdateItem,
  HideServerError,
  Sortorder,
  HandleResponseError,
  KravSelected,
  KravUnselected
}

export interface OversiktKravActions {
  type: Actions;
  payload?: OversiktKravPayload;
}
