export const formatRealNumber = (number: number) => {
  const fixedNumber = number.toFixed(2)
  const formattedNumber = fixedNumber.toString().replace(/[^\d.]/g, ""); // Updated regex to exclude dot
  const [integerPart, decimalPart] = formattedNumber.split("."); // Split into integer and decimal parts
  let currency = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Format integer part with commas

  if (decimalPart) {
    currency += "," + decimalPart; // Add the decimal part back
  }

  return currency;
};
