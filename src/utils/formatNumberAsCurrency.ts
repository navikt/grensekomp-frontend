const formatNumberAsCurrency = (num: number): string => {
  return new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(num);
};

export default formatNumberAsCurrency;
