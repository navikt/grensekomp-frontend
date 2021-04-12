import dayjs from 'dayjs';

const formaterIsoTimestampAsNoTime = (isoTimestamp: string | undefined): string =>
  isoTimestamp ? dayjs(isoTimestamp).format('DD.MM.YYYY kl. HH:mm') : '';

export default formaterIsoTimestampAsNoTime;
