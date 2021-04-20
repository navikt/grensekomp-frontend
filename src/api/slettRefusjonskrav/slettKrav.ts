import environment from '../../config/environment';
import Paths from '../../config/Paths';
import DeleteHandler from '../delete/DeleteHandler';

const slettKrav = (krav: string | undefined) => {
  if (!krav) {
    return Promise.reject(false);
  }
  const path = `${environment.baseUrl}${Paths.Slett}/${krav}`; //'https://grensekomp.dev.nav.no/api/v1/refusjonskrav/810007842';

  return DeleteHandler(path);
};

export default slettKrav;
