import EnkeltPayload from './EnkeltPayload';

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
  DeleteItem,
  HideServerError
}

export interface EnkeltActions {
  type: Actions;
  payload?: EnkeltPayload;
}
