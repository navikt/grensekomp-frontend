import { FetchResponse } from '../../api/fetch/FetchResponse';

export interface OversiktKravPayload {
  id?: string;
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
