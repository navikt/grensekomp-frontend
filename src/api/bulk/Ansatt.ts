interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  periode: {
    fom: string;
    tom: string;
    beregnetMånedsinntekt: number;
  };
  bostedsland: string;
  bekreftet: boolean;
}

export default Ansatt;
