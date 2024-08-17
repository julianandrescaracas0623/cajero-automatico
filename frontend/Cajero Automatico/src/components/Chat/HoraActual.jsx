const HoraActual = () => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convertir a formato de 12 horas
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Formatear minutos
  const ampm = now.getHours() >= 12 ? "PM" : "AM"; // Determinar AM o PM
  const horaActual = `${hours}:${minutes} ${ampm}`;

  return (
    <>
      <span className="text-sm font-normal text-gray-500">{horaActual}</span>
    </>
  );
};

export default HoraActual;
