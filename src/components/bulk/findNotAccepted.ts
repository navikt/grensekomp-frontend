import BulkItem from './BulkItem';

const findNonAccepted = (items: BulkItem[]): BulkItem[] => items.filter((i) => i.accepted === false);

export default findNonAccepted;
