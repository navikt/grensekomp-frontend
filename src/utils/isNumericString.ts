const isNumericString = (probableNumber: string | undefined) => {
  if (probableNumber === undefined) {
    return false;
  }

  return /^[0-9]{1,9}([,][0-9]{1,2})?$/.test(probableNumber);
};

export default isNumericString;
