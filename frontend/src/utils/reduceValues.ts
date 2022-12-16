interface Item {
  createdAt: string;
  description: string;
  ownerId: string;
  value: number;
  id: string;
}

const reduceValues = (items: Item[]) => {
  const values = items.map((item: Item) => item.value);
  return values.length > 0 ? values.reduce((ac, total) => ac + total) : 0;
};

export default reduceValues;
