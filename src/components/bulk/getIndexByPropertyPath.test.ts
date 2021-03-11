import '@testing-library/jest-dom';
import { getIndexByProperyPath } from './getIndexByPropertyPath';

describe('getIndexByProperyPath', () => {
  it('should find correct index', () => {
    expect(getIndexByProperyPath('perioder[0].tom')).toBe(0);
  });

  it('should find large indexes', () => {
    expect(getIndexByProperyPath('perioder[9999].tom')).toBe(9999);
  });
});
