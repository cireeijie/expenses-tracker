const currencySymbol = "₱";

export const amountSeparator = (amount, showSymbol) => {
  const updateAmout = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const amountWithSymbol = currencySymbol + updateAmout;

  if (showSymbol) return amountWithSymbol;

  return updateAmout;
};
