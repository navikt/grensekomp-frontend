import { FetchResponse } from '../../api/fetch/FetchResponse';

export interface OversiktKravPayload {
  fnr?: string;
  orgnr?: string;
  fra?: string;
  til?: string;
  dager?: string;
  beloep?: string;
  land?: string;
  itemId?: string;
  bekreft?: boolean;
  progress?: boolean;
  kvittering?: boolean;
  response?: FetchResponse; // ValidationResponse;
  grunnbeloep?: number;
  kontrollDager?: number;
  sortColumn?: string;
  krav?: string;
}

export default OversiktKravPayload;
