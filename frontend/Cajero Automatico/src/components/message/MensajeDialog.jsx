import Swal from "sweetalert2";

const MensajeDialog = async ({ title, text, titleDate, textDate }) => {
  // Mostrar el primer mensaje de advertencia
  const result = await Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#28a745",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  });

  // Mostrar el segundo mensaje de éxito si se confirma
  if (result.isConfirmed) {
    await Swal.fire({
      title: titleDate,
      text: textDate,
      icon: "success",
    });
  }

  return result;
};

export default MensajeDialog;
