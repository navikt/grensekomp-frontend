import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';

export interface BulkPayload {
  fnr?: string;
  orgnr?: string;
  fra?: Date;
  til?: Date;
  dager?: string;
  beloep?: string;
  itemId?: string;
  videre?: boolean;
  bekreft?: boolean;
  progress?: boolean;
  kvittering?: boolean;
  dokumentasjon?: string;
  response?: BulkValidationResponse; // ValidationResponse;
  grunnbeloep?: number;
  kontrollDager?: number;
}

export default BulkPayload;
