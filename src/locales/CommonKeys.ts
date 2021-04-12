import { Languages } from './utils';

export enum CommonKeys {
  SUB_TITLE_BULK = 'SUB_TITLE_BULK'
}

export const translatedCommonKeys: IncludedCommonKeys = {
  [CommonKeys.SUB_TITLE_BULK]: {
    nb: 'Sub title bulk'
  }
};

export type IncludedCommonKeys = {
  [P in CommonKeys]: {
    [L in Languages]: string;
  };
};
