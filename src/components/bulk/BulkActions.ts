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
  CloseKontrollsporsmaalLonn,
  OpenKontrollsporsmaalLonn,
  Grunnbeloep,
  KontrollDager,
  AddItem,
  DeleteItem
}

export interface Payload {
  fnr?: string;
  orgnr?: string;
  fra?: Date;
  til?: Date;
  dager?: number;
  beloep?: number;
  itemId?: number;
  videre?: boolean;
  bekreft?: boolean;
  progress?: boolean;
  kvittering?: boolean;
  dokumentasjon?: string;
  response?: any; // ValidationResponse;
  grunnbeloep?: number;
  kontrollDager?: number;
}

export interface BulkActions {
  type: Actions;
  payload?: Payload;
}
