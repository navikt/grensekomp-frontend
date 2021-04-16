import formatIsoTimestampAsNoTimestamp from './formatIsoTimestampAsNoTimestamp';

describe('formatIsoTimestampAsNoTimestamp', () => {
  it('should return a correctly formated string', () => {
    expect(formatIsoTimestampAsNoTimestamp('2021-04-08T16:27:33.738093')).toEqual('08.04.2021 kl. 16:27');
  });

  it('should return an empty string when input is empty', () => {
    expect(formatIsoTimestampAsNoTimestamp('')).toEqual('');
  });

  it('should return an empty string when input is undefined', () => {
    expect(formatIsoTimestampAsNoTimestamp(undefined)).toEqual('');
  });
});
