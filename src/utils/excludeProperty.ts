export const excludeProperties = (object, ...properties) => {
  const copyObject = { ...object };

  properties.map((property) => {
    delete copyObject[property];
  });

  return copyObject;
};
