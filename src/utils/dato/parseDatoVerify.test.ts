import parseDatoVerify from './parseDatoVerify';

describe('parseDatoVerify', () => {
  it('should parse dato', () => {
    expect(parseDatoVerify(2002, 10, 5, '05.10.2020').error).toBeUndefined();
  });

  it('should parse dato correct values', () => {
    expect(parseDatoVerify(2021, 1, 1, '01.01.2021').day).toBe(1);
    expect(parseDatoVerify(2021, 1, 31, '31.01.2021').day).toBe(31);
    expect(parseDatoVerify(2020, 1, 32, '32.01.2020').error).not.toBeUndefined();
    expect(parseDatoVerify(2020, 1, 32, '32.01.2020').error).toBe('Ugyldig dato');
  });

  it('should fail incorrect month', () => {
    expect(parseDatoVerify(2020, 18, 3, '03.18.2020').error).not.toBeUndefined();
    expect(parseDatoVerify(2020, 18, 3, '03.18.2020').error).toBe('Ugyldig måned');
  });

  it('should return correct month', () => {
    expect(parseDatoVerify(2020, 11, 3, '03.11.2020').error).toBeUndefined();
    expect(parseDatoVerify(2020, 11, 3, '03.11.2020').month).toBe(11);
  });

  it('should not fail correct year', () => {
    expect(parseDatoVerify(-2020, 1, 3, '03.01.2020').error).toBeUndefined();
    expect(parseDatoVerify(2120, 1, 3, '03.01.2120').error).toBeUndefined();
  });

  it('should parse dato with single values', () => {
    expect(parseDatoVerify(2020, 10, 5, '5.10.2020').error).toBeUndefined();
    expect(parseDatoVerify(2020, 10, 5, '5.10.2020').day).toBe(5);
    expect(parseDatoVerify(2020, 9, 30, '30.9.2020').month).toBe(9);
  });

  it('should not allow invalid values', () => {
    expect(parseDatoVerify(2020, 13, 1, '01.13.2020').error).not.toBeUndefined();
    expect(parseDatoVerify(2020, 12, 0, '00.12.2020').error).not.toBeUndefined();
    expect(parseDatoVerify(2020, 0, 1, '01.00.2020').error).not.toBeUndefined();
    expect(parseDatoVerify(2020, 1, 35, '35.01.2020').error).not.toBeUndefined();
  });

  it('should parse dato to correct value', () => {
    expect(parseDatoVerify(2021, 1, 1, '01.01.2021').value).toBe('01.01.2021');
    expect(parseDatoVerify(2021, 1, 31, '31.01.2021').value).toBe('31.01.2021');
    expect(parseDatoVerify(2020, 1, 31, '32.01.2020').value).toBe('32.01.2020');
  });
});
