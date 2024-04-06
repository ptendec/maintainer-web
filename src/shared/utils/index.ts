export const formattedData = (data?: { name: string; id: number }[]) => {
  return (
    data?.map((item) => ({
      value: String(item.id),
      label: item.name,
    })) ?? []
  );
};
