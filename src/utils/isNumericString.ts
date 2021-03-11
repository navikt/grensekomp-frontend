const isNumericString = (probableNumber: string | undefined) => {
  if (probableNumber === undefined) {
    return false;
  }

  return /^[0-9.,]+$/.test(probableNumber);
};

export default isNumericString;
