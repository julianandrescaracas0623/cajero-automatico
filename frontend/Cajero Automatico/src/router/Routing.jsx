import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/loginScreen/LoginScreen";
import Registro from "../components/loginScreen/Registrar";
import RegistrarFinish from "../components/loginScreen/RegistrarFinish";
import IngresoPin from "../components/loginScreen/IngresoPin";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Rutas publicas*/}
          <Route index element={<LoginScreen />} />
          <Route path="/pinentry" element={<IngresoPin />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/registerFinish" element={<RegistrarFinish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
