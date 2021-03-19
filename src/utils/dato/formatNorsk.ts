import zeroPadding from './zeroPadding';

const formatNorsk = (day, month, year) => `${zeroPadding(day)}.${zeroPadding(month)}.${zeroPadding(year)}`;

export default formatNorsk;
