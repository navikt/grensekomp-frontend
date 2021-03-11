export const getIndexByProperyPath = (propertyPath: string): number => {
  const start = propertyPath.indexOf('[');
  const stop = propertyPath.indexOf(']');

  return parseInt(propertyPath.substr(start + 1, stop - start));
};
