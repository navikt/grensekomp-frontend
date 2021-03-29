import BulkItem from '../../state/bulk/BulkItem';

const findNotAccepted = (items: BulkItem[]): BulkItem[] => items.filter((i) => i.accepted !== true);

export default findNotAccepted;
