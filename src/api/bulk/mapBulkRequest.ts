import BulkRequest from './BulkRequest';
import BulkItem from '../../components/bulk/BulkItem';

const mapBulkRequest = (items: BulkItem[]): BulkRequest => {
  return {
    items: items
  };
};

export default mapBulkRequest;
