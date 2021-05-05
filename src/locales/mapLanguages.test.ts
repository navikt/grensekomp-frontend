import mapLanguages from './mapLanguages';
import Key from './Key';

describe('mapLanguages', () => {
  it('should map all language keys', () => {
    const langs = mapLanguages('nb');
    for (const k in Key) {
      expect(langs[k]).not.toBeUndefined();
    }
  });
});
