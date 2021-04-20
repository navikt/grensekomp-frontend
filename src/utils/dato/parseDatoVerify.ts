const parseDatoVerify = (year: number, month: number, day: number, date: string) => {
  const v = new Date(year, month - 1, day);
  if (v.getDate() != day) {
    return {
      value: date,
      error: 'Ugyldig dato'
    };
  }
  if (v.getMonth() != month - 1) {
    return {
      value: date,
      error: 'Ugyldig måned'
    };
  }
  if (v.getFullYear() != year) {
    return {
      value: date,
      error: 'Ugyldig år'
    };
  }
  return {
    value: date,
    day,
    month,
    year,
    millis: v.getTime()
  };
};

export default parseDatoVerify;
