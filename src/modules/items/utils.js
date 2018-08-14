
export const generateId = (list) => {
  const lastItem = list[list.length - 1];
  const id = lastItem ? lastItem.id + 1 : 0;

  return id;
};
