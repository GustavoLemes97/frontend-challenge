const getFormattedValue = (value) => {
  const formattedValue = value.toLocaleString('PT-BR', {
    maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return formattedValue;
};

export default getFormattedValue;
