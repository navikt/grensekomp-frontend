import BulkItem from '../components/bulk/BulkItem';

const hasFomError = (items: BulkItem[] | undefined) => {
  if (items === undefined) {
    return false;
  }

  const itemWithError = items.find((item) => item.fomError !== undefined);

  return itemWithError !== undefined;
};

export default hasFomError;
