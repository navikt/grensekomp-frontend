import toDato from './toDato';

describe('toDato', () => {
  it('should ', () => {
    const dato = toDato(new Date(2020, 4, 17));
    expect(dato.year).toBe(2020);
    expect(dato.month).toBe(5);
    expect(dato.day).toBe(17);
  });
});
