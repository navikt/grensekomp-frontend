<<<<<<< HEAD
export enum RefusjonskravStatus {
  MOTTATT = 'MOTATT',
  SENDT_TIL_BEHANDLING = 'SENDT_TIL_BEHANDLING',
  FEILET = 'FEILET',
  JOBB = 'JOBB',
  AVBRUTT = 'AVBRUTT',
  SLETTET = 'SLETTET'
}

=======
>>>>>>> 2ca841a (Kravoversikt)
interface OversiktKravPeriode {
  fom: string;
  tom: string;
  antallDagerMedRefusjon: number;
  beregnetMånedsinntekt: number;
}
<<<<<<< HEAD

=======
>>>>>>> 2ca841a (Kravoversikt)
export interface OversiktKravItem {
  id: string;
  identitetsnummer: string;
  periode: OversiktKravPeriode;
  bostedland: string;
  opprettet: string;
  kvitteringId: string;
<<<<<<< HEAD
  status: RefusjonskravStatus;
=======
>>>>>>> 2ca841a (Kravoversikt)
}

export default OversiktKravItem;
