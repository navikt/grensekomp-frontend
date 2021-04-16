import environment from '../../config/environment';
import Paths from '../../config/Paths';
import GetHandler from '../fetch/GetHandler';

const refusjonskravList = (virksomhetsnummer: string | undefined) => {
  if (!virksomhetsnummer) {
    return Promise.reject(false);
  }
  const path = `${environment.baseUrl}${Paths.Bulk}/${virksomhetsnummer}`; //'https://grensekomp.dev.nav.no/api/v1/refusjonskrav/list/810007842';

  return GetHandler(path);
};

export default refusjonskravList;
