import injectRedirectPath from './injectRedirectPath';
import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

describe('injectRedirectPath', () => {
  it('should inject the param', () => {
    const retval = injectRedirectPath('/path-part', Language.nb);
    const expected =
      'https://grensekomp.dev.nav.no/local/cookie-please?subject=10107400090&redirect=http://localhost/path-part?loggedIn=true';

    expect(retval).toBe(expected);
  });
});
