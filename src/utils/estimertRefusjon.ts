const gbeløp: number = 101351; // g-beløp per 29. januar 2021

const estimertRefusjon = (månedsinntekt: number, ukedager: number): number => {
  const årslønn: number = Math.min(månedsinntekt * 12, gbeløp * 6);

  const dagsats: number = Math.round(årslønn / 260);

  const vektetDagsats: number = Math.round(dagsats * 0.7);

  return vektetDagsats * ukedager;
};

export default estimertRefusjon;
