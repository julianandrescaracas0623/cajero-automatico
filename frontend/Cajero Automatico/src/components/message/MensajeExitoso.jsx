import Swal from "sweetalert2";

const MensajeExitoso = ({ title, message }) => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: title,
    text: message,
    showConfirmButton: true,
  });
};

export default MensajeExitoso;
