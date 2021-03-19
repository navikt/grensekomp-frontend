import formatISO from './formatISO';

const formatDate = (date: Date) => formatISO(date.getDate(), date.getMonth() + 1, date.getFullYear());

export default formatDate;
