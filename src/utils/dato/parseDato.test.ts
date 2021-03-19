import { parseDato } from './parseDato';

describe('parseDato', () => {
  it('should parse dato', () => {
    expect(parseDato('05.10.2020').error).toBeUndefined();
    expect(parseDato('05.10.2020').day).toBe(5);
    expect(parseDato('05.10.2020').month).toBe(10);
    expect(parseDato('05.10.2020').year).toBe(2020);
  });

  it('should parse dato correct values', () => {
    expect(parseDato('01.01.2021').day).toBe(1);
    expect(parseDato('31.01.2021').day).toBe(31);
    expect(parseDato('32.01.2020').error).not.toBeUndefined();
  });

  it('should parse dato with single values', () => {
    expect(parseDato('5.10.2020').error).toBeUndefined();
    expect(parseDato('5.10.2020').day).toBe(5);
    expect(parseDato('30.9.2020').month).toBe(9);
  });

  it('should not parse illegal formatISO', () => {
    expect(parseDato('05-10-2020').error).not.toBeUndefined();
    expect(parseDato('2020-10-05').error).not.toBeUndefined();
  });

  it('should not allow invalid values', () => {
    expect(parseDato('01.13.2020').error).not.toBeUndefined();
    expect(parseDato('00.12.2020').error).not.toBeUndefined();
    expect(parseDato('01.00.2020').error).not.toBeUndefined();
    expect(parseDato('35.01.2020').error).not.toBeUndefined();
  });

  it('should parse dato to correct value', () => {
    expect(parseDato('01.01.2021').value).toBe('01.01.2021');
    expect(parseDato('31.01.2021').value).toBe('31.01.2021');
    expect(parseDato('32.01.2020').value).toBe('32.01.2020');
  });
});
