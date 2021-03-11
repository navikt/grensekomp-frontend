import BulkItem from '../components/bulk/BulkItem';

const hasTomError = (items: BulkItem[] | undefined) => {
  if (items === undefined) {
    return false;
  }

  const itemWithError = items.find((item) => item.tomError !== undefined);

  return itemWithError !== undefined;
};

export default hasTomError;
