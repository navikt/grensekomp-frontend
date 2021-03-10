import BulkPayload from './BulkPayload';

export enum Actions {
  Reset,
  Fnr,
  Orgnr,
  Fra,
  Til,
  Dager,
  Beloep,
  Dokumentasjon,
  Bekreft,
  Validate,
  Progress,
  HandleResponse,
  Kvittering,
  NotAuthorized,
  KontrollDager,
  AddItem,
  DeleteItem
}

export interface BulkActions {
  type: Actions;
  payload?: BulkPayload;
}
