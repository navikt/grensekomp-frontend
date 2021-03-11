import BulkRequest from './BulkRequest';
import BulkState from '../../components/bulk/BulkState';

const mapBulkRequest = (state: BulkState): BulkRequest => {
  return [
    {
      identitetsnummer: 'asf',
      perioder: [
        {
          beloep: 2,
          antallDagerMedRefusjon: 3,
          fom: '123',
          tom: '5124'
        }
      ],
      virksomhetsnummer: 'asv'
    }
  ];
};

export default mapBulkRequest;
