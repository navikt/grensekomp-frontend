import landListe from '../components/bulk/Bostedland/landListe';
import ValidationResult from './ValidationResult';
import Key from '../locales/Key';

const validateLand = (land: string | undefined, required: boolean = false): ValidationResult | undefined => {
  if (land === undefined || land.length === 0 || land === 'Velg land:') {
    return required ? { key: Key.COUNTRY_MISSING } : undefined;
  }

  if (landListe.filter((l) => l.iso3 === land).length === 0) {
    return required ? { key: Key.COUNTRY_INVALID } : undefined;
  }
};

export default validateLand;
