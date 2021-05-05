import mapLanguages from './mapLanguages';
import LangKey from './LangKey';

describe('mapLanguages', () => {
  it('should map all language keys', () => {
    const langs = mapLanguages('nb');
    for (const k in LangKey) {
      expect(langs[k]).not.toBeUndefined();
    }
  });
});
