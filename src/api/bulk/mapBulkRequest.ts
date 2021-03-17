import BulkRequest from './BulkRequest';
import BulkState from '../../components/bulk/BulkState';
import BulkItem from '../../components/bulk/BulkItem';
import { datoToString } from '../../utils/Dato';
import Ansatt from './Ansatt';
import findNotAccepted from '../../components/bulk/findNotAccepted';

const mapBulkItem = (item: BulkItem, orgnr: string, bekreftet: boolean = false): Ansatt => ({
  identitetsnummer: item.fnr || '',
  virksomhetsnummer: orgnr,
  periode: {
    fom: datoToString(item.fom),
    tom: datoToString(item.tom),
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
