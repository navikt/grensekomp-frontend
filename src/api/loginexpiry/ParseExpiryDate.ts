import dayjs from 'dayjs';

export const ParseExpiryDate = (value: string): Date => {
  return dayjs(value.substr(0, 17).replace('T', ' ')).toDate();
};

export default ParseExpiryDate;
