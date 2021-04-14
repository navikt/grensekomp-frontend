import Dato from './Dato';

const diffDato = (fom: Dato, tom: Dato): number => {
  if (!fom.millis || !tom.millis) {
    return 0;
  }
  return diffDate(new Date(fom.millis), new Date(tom.millis));
};

const WEEKDAYS = [1, 2, 3, 4, 5];

export const diffDate = (fom: Date, tom: Date): number => {
  let antall = 0;
  for (let x = 0; x < 10000; x++) {
    const idag = new Date(fom.getFullYear(), fom.getMonth(), fom.getDate() + x);
    if (WEEKDAYS.includes(idag.getDay())) {
      antall++;
    }
    if (idag.getTime() >= tom.getTime()) {
      return antall;
    }
  }
  return antall;
};

export default diffDato;
