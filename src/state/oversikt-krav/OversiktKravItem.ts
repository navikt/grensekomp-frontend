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
}

export default OversiktKravItem;
