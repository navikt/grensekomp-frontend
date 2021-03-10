import mapBulkRequest from './mapBulkRequest';

describe('mapBulkRequest', () => {
  it('should not fail when fnr is 0', () => {
    expect(() => {
      mapBulkRequest([]);
    }).not.toThrow('');
  });
});
