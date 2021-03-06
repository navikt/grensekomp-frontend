import env from '../../config/environment';
import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

function injectRedirectPath(injectedPath: string, lang: Language): string {
  const host = window.location.origin;
  const injectedUrl = env.loginServiceUrl.replace('XXX', host + injectedPath);
  if (!!lang) {
    return injectedUrl.replace(':language', lang);
  }
  return injectedUrl;
}

export default injectRedirectPath;
