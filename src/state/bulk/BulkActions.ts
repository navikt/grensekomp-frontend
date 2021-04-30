import BulkPayload from './BulkPayload';

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
  DeleteItem,
  HideServerError
}

export interface BulkActions {
  type: Actions;
  payload?: BulkPayload;
}
