export const getShortAddress = (address, begin = 6, end = 4) =>
  address.length >= begin + end + 3
    ? `${address.slice(0, begin)}...${address.slice(-end)}`
    : address;
export const formatPricing = text => {
  let newText = text + '';
  const parts = newText.split('.');
  if (parts[1]) {
    newText = parts[0] + '.' + parts[1].slice(0, 4);
  }

  return newText;
};
