import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';

export interface BulkPayload {
  fnr?: string;
  orgnr?: string;
  fra?: Date;
  til?: Date;
  dager?: string;
  beloep?: string;
  land?: string;
  itemId?: string;
  bekreft?: boolean;
  progress?: boolean;
  kvittering?: boolean;
  response?: BulkValidationResponse; // ValidationResponse;
  grunnbeloep?: number;
  kontrollDager?: number;
}

export default BulkPayload;
