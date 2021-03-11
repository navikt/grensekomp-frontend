interface Ansatt {
  identitetsnummer: string;
  virksomhetsnummer: string;
  perioder: [
    {
      fom: string;
      tom: string;
      antallDagerMedRefusjon: number;
      beloep: number;
    }
  ];
}

export default Ansatt;
