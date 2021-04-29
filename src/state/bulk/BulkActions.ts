import BulkPayload from './BulkPayload';
import { TFunction } from 'i18next';

export enum Actions {
  Reset,
  Language,
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
  i18n: any;
}
