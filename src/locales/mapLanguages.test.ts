import mapLanguages from './mapLanguages';

describe('mapLanguages', () => {
  it('mapLang', async () => {
    expect(mapLanguages('no')).toEqual({ Bostedsland: 'Land', Tittel: 'Sidetittel' });
    expect(mapLanguages('en')).toEqual({ Bostedsland: 'Country', Tittel: 'Page title' });
  });
});
