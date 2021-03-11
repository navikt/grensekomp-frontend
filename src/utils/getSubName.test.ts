import '@testing-library/jest-dom';
import { getSubName } from './getSubName';

describe('getSubName', () => {
  it('should find', () => {
    expect(getSubName('perioder[0].tom', 0)).toBe('tom');
  });
  it('should find', () => {
    expect(getSubName('perioder[9999].tom', 9999)).toBe('tom');
  });
});
