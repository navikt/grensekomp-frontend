import dayjs from 'dayjs';

const isIsoDate = (isoDate: string) => {
  const isoDateCheck = new RegExp(/^\d{4}-[01]\d-[0-3]\d$/);

  return isoDateCheck.test(isoDate);
};

const formatIsoDateAsNoDate = (isoDate: string | undefined): string => {
  if (!isoDate || !isIsoDate(isoDate)) {
    return '';
  }

  return dayjs(isoDate).format('DD.MM.YYYY');
};

export default formatIsoDateAsNoDate;
