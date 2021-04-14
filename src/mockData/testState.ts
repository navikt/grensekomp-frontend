import BulkState from '../state/bulk/BulkState';
import { parseDato } from '../utils/dato/parseDato';

const testState: BulkState = {
  feilmeldinger: [],
  orgnr: '123456789',
  items: [
    {
      uniqueKey: 'rad_1',
      fnr: 'abc',
      fom: parseDato('02.03.2021'),
      tom: parseDato('05.03.2021'),
      beloep: '2500'
    },
    {
      uniqueKey: 'rad_2',
      fnr: 'abc',
      fom: parseDato('08.03.2021'),
      tom: parseDato('12.03.2021'),
      beloep: '3200'
    }
  ]
};

export default testState;
