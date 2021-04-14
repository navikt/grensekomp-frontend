import BulkState from '../../state/bulk/BulkState';
import { Dato } from '../../utils/dato/Dato';
import mapBulkRequest from './mapBulkRequest';
import BulkRequest from './BulkRequest';

describe('mapBulkRequest', () => {
  it('should throw when no data', () => {
    expect(() => {
      mapBulkRequest({} as BulkState);
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
          beloep: '123',
          land: 'SWE'
        },
        {
          uniqueKey: '2',
          accepted: false,
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          beloep: '123',
          land: 'SWE'
        },
        {
          uniqueKey: '3',
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          beloep: '123',
          land: 'SWE'
        },
        {
          uniqueKey: '4',
          accepted: true,
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          beloep: '123',
          land: 'SWE'
        },
        {
          uniqueKey: '5',
          accepted: false,
          fnr: '1234',
          fom: unimportantMockDate,
          tom: unimportantMockDate,
          land: 'SWE'
        }
      ],
      bekreft: true
    };

    const expected: BulkRequest = [
      {
        identitetsnummer: '',
        periode: {
          beregnetMånedsinntekt: 123,
          fom: '2020-01-01',
          tom: '2020-01-01'
        },
        bostedsland: 'SWE',
        virksomhetsnummer: '1234',
        bekreftet: true
      },
      {
        identitetsnummer: '',
        periode: {
          beregnetMånedsinntekt: 123,
          fom: '2020-01-01',
          tom: '2020-01-01'
        },
        bostedsland: 'SWE',
        virksomhetsnummer: '1234',
        bekreftet: true
      },
      {
        identitetsnummer: '1234',
        periode: {
          beregnetMånedsinntekt: NaN,
          fom: '2020-01-01',
          tom: '2020-01-01'
        },
        bostedsland: 'SWE',
        virksomhetsnummer: '1234',
        bekreftet: true
      }
    ];

    expect(mapBulkRequest(bulkState)).toEqual(expected);
  });
});
