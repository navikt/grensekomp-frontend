import dayjs from 'dayjs';

export const minDate = dayjs('2021-01-29').toDate();
export const maxDate = () => {
  const today = new Date();
  const endDate = dayjs('2021-10-01').toDate();

  return today > endDate ? endDate : today;
};
