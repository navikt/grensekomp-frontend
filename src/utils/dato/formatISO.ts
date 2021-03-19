import zeroPadding from './zeroPadding';

const formatISO = (day: number, month: number, year: number) =>
  `${zeroPadding(year)}-${zeroPadding(month)}-${zeroPadding(day)}`;

export default formatISO;
