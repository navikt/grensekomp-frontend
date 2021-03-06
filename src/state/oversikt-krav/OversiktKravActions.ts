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
  SlettItem,
  HideServerError,
  Sortorder,
  HandleResponseError,
  KravSelected,
  KravUnselected,
  ModalOpen,
  ModalClose
}

export interface OversiktKravActions {
  type: Actions;
  payload?: OversiktKravPayload;
}
