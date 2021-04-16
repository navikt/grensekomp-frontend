import BulkState from './OversiktKravState';
import validateOversiktKrav from './validateOversiktKrav';

describe('validateOversiktKrav', () => {
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
    const state = validateOversiktKrav(fromState);
    expect(state.orgnrError).not.toBeUndefined();
    expect(state.bekreftError).not.toBeUndefined();
    expect(state.items.length).toBe(1);
    expect(state.feilmeldinger.length).toBe(2);
  });
});
