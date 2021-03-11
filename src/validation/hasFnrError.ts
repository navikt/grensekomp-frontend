import BulkItem from '../components/bulk/BulkItem';

const hasFnrError = (items: BulkItem[] | undefined) => {
  if (items === undefined) {
    return false;
  }

  const itemWithError = items.find((item) => item.fnrError !== undefined);

  return itemWithError !== undefined;
};

export default hasFnrError;
