import BulkItem from '../components/bulk/BulkItem';

const hasBeloepError = (items: BulkItem[] | undefined) => {
  if (items === undefined) {
    return false;
  }

  const itemWithError = items.find((item) => item.beloepError !== undefined);

  return itemWithError !== undefined;
};

export default hasBeloepError;
