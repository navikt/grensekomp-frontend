interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  periode: {
    fom: string;
    tom: string;
    antallDagerMedRefusjon: number;
    dagsats: number;
  };
  bostedsland: string;
  bekreftet: boolean;
}

export default Ansatt;
