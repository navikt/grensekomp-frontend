import { Languages } from './utils';

export enum BulkKeys {
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
