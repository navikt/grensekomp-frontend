import OversiktKravItem from './OversiktKravItem';
import unikeInnsendinger from './unikeInnsendinger';

describe('unikeInnsendinger', () => {
  it('should return a uniqe list of innsendinger', () => {
    const source = [{ opprettet: '123' }, { opprettet: '123' }, { opprettet: '444' }, { opprettet: 'asd' }];

    expect(unikeInnsendinger(source as OversiktKravItem[])).toEqual(['123', '444', 'asd']);
  });
});
