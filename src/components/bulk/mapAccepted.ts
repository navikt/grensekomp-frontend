import BulkState from './BulkState';
import BulkItem from './BulkItem';

const ACCEPTED = 'OK';

const findNonAccepted = (items: BulkItem[]): BulkItem[] => items.filter((i) => i.accepted === false);

const mapAccepted = (response, state: BulkState) => {
  console.log('mapAccepted', response);
  response.violations.forEach((validation, rowIndex) => {
    console.log('validation', validation);
    const notAcceptedItems = findNonAccepted(state.items);
    if (validation.status === ACCEPTED) {
      notAcceptedItems[rowIndex].accepted = true;
    }
  });
};

export default mapAccepted;
