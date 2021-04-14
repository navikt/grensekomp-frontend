import Dato from '../../utils/dato/Dato';
import isNumericString from '../../utils/isNumericString';
import diffDato from '../../utils/dato/diffDato';
import estimertRefusjon from '../../utils/estimertRefusjon';

const kalkulerRefusjon = (inntekt?: string, fom?: Dato, tom?: Dato): number => {
  const månedsinntekt = isNumericString(inntekt) ? parseInt(inntekt || '0') : 0;
  const ukedager = fom && tom ? diffDato(fom, tom) : 0;
  return estimertRefusjon(månedsinntekt, ukedager);
};

export default kalkulerRefusjon;
