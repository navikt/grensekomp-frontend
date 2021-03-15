import BulkRequest from './BulkRequest';
import BulkState from '../../components/bulk/BulkState';
import BulkItem from '../../components/bulk/BulkItem';
import { datoToString } from '../../utils/Dato';
import Ansatt from './Ansatt';

const mapAnsatt = (item: BulkItem, orgnr: string): Ansatt => ({
  identitetsnummer: item.fnr || '',
  virksomhetsnummer: orgnr,
  perioder: [
    {
      fom: datoToString(item.fom),
      tom: datoToString(item.tom),
      antallDagerMedRefusjon: parseInt(item?.dager || ''),
      beloep: parseInt(item.beloep || '')
    }
  ]
});

const mapBulkRequest = (state: BulkState): BulkRequest => {
  if (!state.items) {
    throw new Error('Må ha minst en ansatt');
  }
  if (state?.orgnr === undefined) {
    throw new Error('Må ha orgnr');
  }
  return state.items?.filter((item) => item.accepted !== true).map((i) => mapAnsatt(i, state?.orgnr || ''));
};

export default mapBulkRequest;
