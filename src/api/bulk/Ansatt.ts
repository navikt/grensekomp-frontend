interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  periode: {
    fom: string;
    tom: string;
    antallDagerMedRefusjon: number;
    beloep: number;
  };
  bekreftet: boolean;
}

export default Ansatt;
