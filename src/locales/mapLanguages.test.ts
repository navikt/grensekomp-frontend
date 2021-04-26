import mapLanguages from './mapLanguages';

describe('mapLanguages', () => {
  it('map', async () => {
    expect(mapLanguages('nb')).not.toBeUndefined();
  });
});
