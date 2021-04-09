import landListe from '../components/bulk/Bostedland/landListe';

const validateLand = (land: string | undefined, required: boolean = false): string | undefined => {
  if (land === undefined || land.length === 0 || land === 'Velg land:') {
    return required ? 'Mangler land' : undefined;
  }

  if (land === 'Øvrige land') {
    return required ? 'Kan ikke være øvrige land' : undefined;
  }

  if (land === 'XUK') {
    return undefined;
  }

  if (landListe.filter((l) => l.iso3 === land).length === 0) {
    return required ? 'Land ikke gyldig' : undefined;
  }
};

export default validateLand;
