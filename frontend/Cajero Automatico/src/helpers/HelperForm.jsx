/**
 * @description : Ayudante para capturar la data del formulario en tiempo real
 * @returns Devuelve un objeto
 */
import { useState } from "react";

const HelperForm = (data = {}) => {
  const [form, setForm] = useState(data);

  const cambiar = ({ target }) => {
    if (target) {
      const { name, value } = target;

      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return {
    form,
    cambiar,
  };
};

export default HelperForm;
