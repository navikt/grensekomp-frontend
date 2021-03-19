import env from '../environment';

function injectRedirectPath(injectedPath: string): string {
  const host = window.location.origin;

  return env.loginServiceUrl.replace('XXX', host + injectedPath);
}

export default injectRedirectPath;
