export const removeProperty = <Obj, Prop extends keyof Obj>(
  obj: Obj,
  prop: Prop
): Omit<Obj, Prop> => {
  const { [prop]: _, ...rest } = obj;

  return rest;
};

export const compareNumbers = (a: number, b: number, dir: 'asc' | 'desc') =>
  dir === 'asc' ? b - a : a - b;

export const compareStrings = (a: string, b: string, dir: 'asc' | 'desc') =>
  dir === 'asc' ? b.localeCompare(a) : a.localeCompare(b);
