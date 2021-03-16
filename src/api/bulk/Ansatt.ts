interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  periode: {
    fom: string;
    tom: string;
    antallDagerMedRefusjon: number;
    beloep: number;
  };
}

export default Ansatt;
