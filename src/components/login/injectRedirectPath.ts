import env from '../../config/environment';

function injectRedirectPath(injectedPath: string, lang: string): string {
  const host = window.location.origin;
  const injectedUrl = env.loginServiceUrl.replace('XXX', host + injectedPath);
  if (!!lang) {
    return injectedUrl.replace(':language', lang);
  }
  return injectedUrl;
}

export default injectRedirectPath;
