import BulkItem from '../components/bulk/BulkItem';
import { v4 as uuid } from 'uuid';

const mockBulk: Array<BulkItem> = [
  // {
  //   uniqueKey: 'abc',
  //   fnr: '1234',
  //   fnrError: 'Ugyldig fnr',
  //   fom: { year: 2021, month: 3, day: 2 },
  //   fomError: 'Ugyldig fom',
  //   tom: { year: 2021, month: 3, day: 4 },
  //   tomError: 'Ugyldig tom',
  //   beloep: '200',
  //   beloepError: 'Ugyldig beløp',
  //   dager: '3',
  //   dagerError: 'Ugyldig antall dager'
  // },
  {
    uniqueKey: uuid(),
    fnr: '',
    dager: '',
    beloep: ''
  }
];

export default mockBulk;
