const gbeløp: number = 101351; // g-beløp per 29. januar 2021

const estimertRefusjon = (månedsinntekt: number, ukedager: number): number => {
  const årslønn: number = Math.min(månedsinntekt * 12, gbeløp * 6);

  const dagsats: number = årslønn / 260;

  return dagsats * ukedager * 0.7;
};

export default estimertRefusjon;
