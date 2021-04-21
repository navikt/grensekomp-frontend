export enum EnvironmentType {
  PROD,
  PREPROD_DEV, // Angir at man aksesserer preprod via naisdevice på *.dev.nav.no, kun tilgjengelig via naisdevice
  LOCAL
}

class Environment {
  get loginServiceUrl() {
    switch (this.environmentMode) {
      case EnvironmentType.PROD:
        return 'https://loginservice.nav.no/login?redirect=https://arbeidsgiver.nav.no/grensekomp?loggedIn=true';
      case EnvironmentType.PREPROD_DEV:
        return 'https://grensekomp.dev.nav.no/local/cookie-please?subject=10107400090&redirect=XXX?loggedIn=true';
      default:
        return 'https://grensekomp.dev.nav.no/local/cookie-please?subject=10107400090&redirect=XXX?loggedIn=true';
    }
  }

  get baseUrl() {
    switch (this.environmentMode) {
      case EnvironmentType.PROD:
        return 'https://arbeidsgiver.nav.no/grensekomp-api';
      case EnvironmentType.PREPROD_DEV:
        return 'https://grensekomp.dev.nav.no';
      default:
        return 'https://grensekomp.dev.nav.no';
    }
  }

  get environmentMode() {
    if (window.location.hostname === 'localhost') {
      return EnvironmentType.LOCAL;
    }
    if (window.location.hostname.indexOf('.dev.nav.no') > -1) {
      return EnvironmentType.PREPROD_DEV;
    }
    return EnvironmentType.PROD;
  }
}

const env = new Environment();

export default env;
