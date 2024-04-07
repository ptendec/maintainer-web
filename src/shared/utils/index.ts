export const formattedData = (data?: { name: string; id: number }[]) => {
  if (!data) return [];
  return data.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));
};
