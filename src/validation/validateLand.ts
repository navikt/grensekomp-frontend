import landListe from '../components/bulk/Bostedland/landListe';
import { ValidationResult } from '@navikt/helse-arbeidsgiver-felles-frontend';
import LangKey from '../language/LangKey';

const validateLand = (land: string | undefined, required: boolean = false): ValidationResult | undefined => {
  if (land === undefined || land.length === 0 || land === 'Velg land:') {
    return required ? { key: LangKey.COUNTRY_MISSING } : undefined;
  }

  if (landListe.filter((l) => l.iso3 === land).length === 0) {
    return required ? { key: LangKey.COUNTRY_INVALID } : undefined;
  }
};

export default validateLand;
