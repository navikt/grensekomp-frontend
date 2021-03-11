import dayjs from 'dayjs';
import { Dato } from './Dato';

const isAfterMinDate = (dagen: Dato) => {
  return dayjs(dagen?.value).isBefore('2021-01-29');
};

export default isAfterMinDate;
