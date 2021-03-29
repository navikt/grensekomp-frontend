const validateLand = (land: string | undefined, required: boolean = false): string | undefined => {
  if (land === undefined || land.length === 0) {
    return required ? 'Mangler land' : undefined;
  }
};

export default validateLand;
