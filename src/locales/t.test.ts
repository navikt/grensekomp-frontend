import t from './t';
import Languages from './Languages';

describe('mapSpråk', () => {
  it('default', async () => {
    expect(t(Languages.HEADER_1)).toEqual('HEADER_1');
  });

  it('engelsk', async () => {
    expect(t(Languages.HEADER_1, 'en')).toEqual('HEADER_1');
  });

  it('norsk', async () => {
    expect(t(Languages.HEADER_1, 'no')).toEqual('HEADER_1');
  });
});
