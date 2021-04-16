export enum RefusjonskravStatus {
  MOTTATT = 'MOTATT',
  SENDT_TIL_BEHANDLING = 'SENDT_TIL_BEHANDLING',
  FEILET = 'FEILET',
  JOBB = 'JOBB',
  AVBRUTT = 'AVBRUTT',
  SLETTET = 'SLETTET'
}

interface OversiktKravPeriode {
  fom: string;
  tom: string;
  antallDagerMedRefusjon: number;
  beregnetMånedsinntekt: number;
}

export interface OversiktKravItem {
  id: string;
  identitetsnummer: string;
  periode: OversiktKravPeriode;
  bostedland: string;
  opprettet: string;
  kvitteringId: string;
  status: RefusjonskravStatus;
}

export default OversiktKravItem;
