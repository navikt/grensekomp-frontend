import BulkState from '../../components/bulk/BulkState';
import { Dato } from '../../utils/Dato';
import mapBulkRequest from './mapBulkRequest';

describe('mapBulkRequest', () => {
  it('should throw when no data', () => {
    expect(() => {
      mapBulkRequest([]);
    }).toThrow('Må ha minst en ansatt');
  });

  it('should throw when missing orgnr is missing', () => {
    const bulkState: BulkState = {
      feilmeldinger: [],
      items: []
    };
    expect(() => {
      mapBulkRequest(bulkState);
    }).toThrow('Må ha orgnr');
  });

  it('should return items not accepted', () => {
    const unimportantMockDate: Dato = {
      value: '01-01-2020',
      year: 2020,
      month: 1,
      day: 1,
      millis: 12345
    };
    const bulkState: BulkState = {
      feilmeldinger: [],
      orgnr: '1234',
      items: [
        {
          uniqueKey: '1',
          accepted: true,
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          dager: '1',
          beloep: '123'
        },
        {
          uniqueKey: '2',
          accepted: false,
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          dager: '1',
          beloep: '123'
        },
        {
          uniqueKey: '3',
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          dager: '1',
          beloep: '123'
        },
        {
          uniqueKey: '4',
          accepted: true,
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          dager: '1',
          beloep: '123'
        }
      ]
    };

    const expected = [
      {
        identitetsnummer: '',
        perioder: [
          {
            antallDagerMedRefusjon: 1,
            beloep: 123,
            fom: '2020-01-01',
            tom: '2020-01-01'
          }
        ],
        virksomhetsnummer: '1234'
      },
      {
        identitetsnummer: '',
        perioder: [
          {
            antallDagerMedRefusjon: 1,
            beloep: 123,
            fom: '2020-01-01',
            tom: '2020-01-01'
          }
        ],
        virksomhetsnummer: '1234'
      }
    ];

    expect(mapBulkRequest(bulkState)).toEqual(expected);
  });
});
