import BulkItem from '../components/bulk/BulkItem';

const hasDagerError = (items: BulkItem[] | undefined) => {
  if (items === undefined) {
    return false;
  }

  const itemWithError = items.find((item) => item.dagerError !== undefined);

  return itemWithError !== undefined;
};

export default hasDagerError;
