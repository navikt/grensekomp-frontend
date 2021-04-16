import { Languages } from './utils';

enum BulkKeys {
  HEADER = 'HEADER'
}

export const translatedBulkKeys: IncludedBulkKeys = {
  [BulkKeys.HEADER]: {
    nb: 'Header text'
  }
};

export type IncludedBulkKeys = {
  [P in BulkKeys]: {
    [L in Languages]: string;
  };
};

export default BulkKeys;
