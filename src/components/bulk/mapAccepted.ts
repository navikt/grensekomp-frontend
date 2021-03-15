import BulkState from './BulkState';
import findNonAccepted from './findNotAccepted';

const VALIDATION_STATUS = {
  ACCEPTED: 'OK'
};

const mapAccepted = (response: any, state: BulkState) => {
  response.violations.forEach((validation, rowIndex) => {
    const notAcceptedItems = findNonAccepted(state.items);
    if (validation.status === VALIDATION_STATUS.ACCEPTED) {
      notAcceptedItems[rowIndex].accepted = true;
    }
  });
};

export default mapAccepted;
