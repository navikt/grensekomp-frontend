import { FetchResponse } from '../../api/fetch/FetchResponse';

export interface OversiktKravPayload {
<<<<<<< HEAD
  id?: string;
=======
  fnr?: string;
  orgnr?: string;
  fra?: string;
  til?: string;
  dager?: string;
  beloep?: string;
  land?: string;
  itemId?: string;
>>>>>>> 2ca841a (Kravoversikt)
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
