import BulkState from './BulkState';
import validateBulk from './validateBulk';

describe('validateBulk', () => {
  it('should map all errors', () => {
    const fromState: BulkState = {
      validated: true,
      feilmeldinger: [],
      items: [
        {
          fom: undefined,
          tom: undefined
        }
      ]
    };
    const state = validateBulk(fromState);
    expect(state.orgnrError).not.toBeUndefined();
    expect(state.bekreftError).not.toBeUndefined();
    expect(state.items.length).toBe(1);
    expect(state.items[0].fnrError).not.toBeUndefined();
    expect(state.items[0].fomError).not.toBeUndefined();
    expect(state.items[0].tomError).not.toBeUndefined();
    expect(state.items[0].dagerError).not.toBeUndefined();
    expect(state.items[0].beloepError).not.toBeUndefined();
    expect(state.feilmeldinger.length).toBe(7);
  });
});
