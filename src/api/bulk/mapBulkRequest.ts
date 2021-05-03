import BulkRequest from './BulkRequest';
import BulkState from '../../state/bulk/BulkState';
import BulkItem from '../../state/bulk/BulkItem';
import Ansatt from './Ansatt';
import findNotAccepted from '../../components/bulk/findNotAccepted';
import { datoToString } from '../../utils/dato/datoToString';

const mapBulkItem = (item: BulkItem, orgnr: string, bekreftet: boolean = false): Ansatt => ({
  identitetsnummer: item.fnr || '',
  virksomhetsnummer: orgnr,
  periode: {
    fom: datoToString(item.fom),
    tom: datoToString(item.tom),
    beregnetMånedsinntekt: parseFloat(item.beloep || '')
  },
  bostedsland: item.land || '',
  bekreftet: bekreftet
});

const mapBulkRequest = (state: BulkState): BulkRequest => {
  if (!state.items) {
    throw new Error('Må ha minst en ansatt');
  }
  if (state?.orgnr === undefined) {
    throw new Error('Må ha orgnr');
  }
  return findNotAccepted(state.items).map((i) => mapBulkItem(i, state?.orgnr || '', state?.bekreft || false));
};

export default mapBulkRequest;
