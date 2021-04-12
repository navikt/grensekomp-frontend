import testValidationResponse from '../../mockData/testValidationResponse';
import mapOversiktKravValidationResponse from './mapOversiktKravValidationResponse';
import OversiktKravState from '../../state/oversikt-krav/OversiktKravState';

describe('mapOversiktKravValidationResponse', () => {
  it('should map correctly', () => {
    const state = {
      items: [
        {
          uniqueKey: 'abc'
        }
      ]
    } as OversiktKravState;
    const nextState = mapOversiktKravValidationResponse(testValidationResponse, state);

    expect(nextState.orgnrError).toBeUndefined();
  });
});
