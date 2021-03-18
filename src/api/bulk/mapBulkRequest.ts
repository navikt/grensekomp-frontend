import BulkRequest from './BulkRequest';
import BulkState from '../../components/bulk/BulkState';
import BulkItem from '../../components/bulk/BulkItem';
import Ansatt from './Ansatt';
import findNotAccepted from '../../components/bulk/findNotAccepted';
import { toString } from '../../utils/dato/toString';

const mapBulkItem = (item: BulkItem, orgnr: string, bekreftet: boolean = false): Ansatt => ({
  identitetsnummer: item.fnr || '',
  virksomhetsnummer: orgnr,
  periode: {
    fom: toString(item.fom),
    tom: toString(item.tom),
    antallDagerMedRefusjon: parseInt(item?.dager || ''),
    beloep: parseInt(item.beloep || '')
  },
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
