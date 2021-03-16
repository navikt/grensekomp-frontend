import testValidationResponse from '../../mockData/testValidationResponse';
import mapBulkValidationResponse from './mapBulkValidationResponse';
import BulkState from './BulkState';

describe('mapBulkValidationResponse', () => {
  it('should', () => {
    const state = {
      items: [{}, {}, {}]
    } as BulkState;
    const nextState = mapBulkValidationResponse(testValidationResponse, state);
    expect(nextState.items[0].beloepError).not.toBeUndefined();
  });
});
