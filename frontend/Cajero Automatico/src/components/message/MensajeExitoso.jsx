import Swal from "sweetalert2";

const MensajeExitoso = ({ title, message,timer }) => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: title,
    text: message,
    showConfirmButton: true,
    timer: timer
  });
};

export default MensajeExitoso;
