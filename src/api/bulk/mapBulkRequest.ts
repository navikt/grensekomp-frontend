import { BulkRequest } from './BulkRequest';
import { BulkItems } from '../../components/bulk/BulkState';

export const mapBulkRequest = (items: BulkItems[]): BulkRequest => {
  return {
    items: items
  };
};
