import dayjs from 'dayjs';

const formatIsoTimestampAsNoTimestamp = (isoTimestamp: string | undefined): string =>
  isoTimestamp ? dayjs(isoTimestamp).format('DD.MM.YYYY kl. HH:mm') : '';

export default formatIsoTimestampAsNoTimestamp;
