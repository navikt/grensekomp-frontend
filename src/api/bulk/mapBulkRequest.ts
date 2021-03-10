import BulkRequest from './BulkRequest';
import { BulkItems } from '../../components/bulk/BulkState';

const mapBulkRequest = (items: BulkItems[]): BulkRequest => {
  return {
    items: items
  };
};

export default mapBulkRequest;
