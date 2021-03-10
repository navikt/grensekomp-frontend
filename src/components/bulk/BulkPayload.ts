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
  response?: any; // ValidationResponse;
  grunnbeloep?: number;
  kontrollDager?: number;
}

export default BulkPayload;
