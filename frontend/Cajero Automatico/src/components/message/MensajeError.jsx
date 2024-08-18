import Swal from "sweetalert2";

const MensajeError = ({ title, message }) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: message,
  });
};

export default MensajeError;
