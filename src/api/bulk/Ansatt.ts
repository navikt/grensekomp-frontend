interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  periode: {
    fom: string;
    tom: string;
    beregnetMĂ„nedsinntekt: number;
  };
  bostedsland: string;
  bekreftet: boolean;
}

export default Ansatt;
