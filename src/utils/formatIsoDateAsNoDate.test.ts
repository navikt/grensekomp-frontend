import formatIsoTimestampAsNoTimestamp from './formatIsoDateAsNoDate';

describe('formatIsoTimestampAsNoTimestamp', () => {
  it('should return a correctly formated string', () => {
    expect(formatIsoTimestampAsNoTimestamp('2021-04-01')).toBe('01.04.2021');
  });

  it('should return an empty string for an invalid date', () => {
    expect(formatIsoTimestampAsNoTimestamp('2021-04-32')).toBe('02.05.2021');
  });

  it('should return an empty string for a really invalid date', () => {
    expect(formatIsoTimestampAsNoTimestamp('2021-04-42')).toBe('');
  });

  it('should return an empty string for an empty input', () => {
    expect(formatIsoTimestampAsNoTimestamp('')).toBe('');
  });
});
