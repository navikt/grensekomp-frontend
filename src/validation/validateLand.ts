const validateLand = (land: string | undefined, required: boolean = false): string | undefined => {
  if (land === undefined || land.length === 0) {
    return required ? 'Mangler land' : undefined;
  }
  if (land.length !== 3) {
    return required ? 'Må være 3 bokstaver' : undefined;
  }
};

export default validateLand;
