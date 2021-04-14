import testValidationResponse, {
  testGenericResponse,
  testUnknownResponse
} from '../../mockData/testValidationResponse';
import mapBulkValidationResponse from './mapBulkValidationResponse';
import BulkState from '../../state/bulk/BulkState';

describe('mapBulkValidationResponse', () => {
  it('should map correctly', () => {
    const state = {
      items: [
        {
          uniqueKey: 'abc'
        }
      ]
    } as BulkState;
    const nextState = mapBulkValidationResponse(testValidationResponse, state);

    expect(nextState.items[0].beloepError).not.toBeUndefined();
    expect(nextState.items[0].tomError).not.toBeUndefined();
  });

  it('should map generic error', () => {
    const state = {
      items: [
        {
          uniqueKey: 'def'
        }
      ]
    } as BulkState;
    const nextState = mapBulkValidationResponse(testGenericResponse, state);

    expect(nextState.items[0].beloepError).toBeUndefined();
    expect(nextState.items[0].tomError).toBeUndefined();
    expect(nextState.items[0].genericError).not.toBeUndefined();
  });

  it('should map unknown error', () => {
    const state = {
      items: [
        {
          uniqueKey: 'ghi'
        }
      ]
    } as BulkState;
    const nextState = mapBulkValidationResponse(testUnknownResponse, state);

    expect(nextState.items[0].beloepError).toBeUndefined();
    expect(nextState.items[0].tomError).toBeUndefined();
    expect(nextState.items[0].genericError).not.toBeUndefined();
  });
});
