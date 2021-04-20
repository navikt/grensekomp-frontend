import { parseISODato } from './parseISODato';

describe('parseISODato', () => {
  it('should parse dato', () => {
    expect(parseISODato('2020-10-05').error).toBeUndefined();
    expect(parseISODato('2020-10-05').day).toBe(5);
    expect(parseISODato('2020-10-05').month).toBe(10);
    expect(parseISODato('2020-10-05').year).toBe(2020);
  });

  it('should parse dato correct values', () => {
    expect(parseISODato('2021-01-01').day).toBe(1);
    expect(parseISODato('2021-01-31').day).toBe(31);
    expect(parseISODato('2020-01-32').error).not.toBeUndefined();
  });

  it('should parse dato with single values', () => {
    expect(parseISODato('2020-10-05').error).toBeUndefined();
    expect(parseISODato('2020-10-05').day).toBe(5);
    expect(parseISODato('2020-09-30').month).toBe(9);
  });

  it('should not parse illegal formatISO', () => {
    expect(parseISODato('05-10-2020').error).not.toBeUndefined();
    expect(parseISODato('05.10.2020').error).not.toBeUndefined();
    expect(parseISODato('2020.10.05').error).not.toBeUndefined();
  });

  it('should not allow invalid values', () => {
    expect(parseISODato('2020-13-01').error).not.toBeUndefined();
    expect(parseISODato('2020-12-00').error).not.toBeUndefined();
    expect(parseISODato('2020-00-01').error).not.toBeUndefined();
    expect(parseISODato('2020-01-35').error).not.toBeUndefined();
  });

  it('should parse dato to correct value', () => {
    expect(parseISODato('2021-01-01').value).toBe('2021-01-01');
    expect(parseISODato('2021-01-31').value).toBe('2021-01-31');
    expect(parseISODato('2020-01-32').value).toBe('2020-01-32');
  });
});
