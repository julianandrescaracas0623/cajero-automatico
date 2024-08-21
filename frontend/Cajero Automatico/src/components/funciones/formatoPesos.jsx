const formatoPesos = (value) => {
  // Reemplaza caracteres no numéricos y elimina los puntos existentes
  const cleanedValue = value.replace(/[^\d]/g, "");
  const number = Number(cleanedValue);

  if (isNaN(number)) return "";

  // Formatea el valor como moneda colombiana sin decimales si son cero
  const formattedValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);

  return formattedValue;
};

export default formatoPesos;
