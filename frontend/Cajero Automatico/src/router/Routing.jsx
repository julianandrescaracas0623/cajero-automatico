import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes Publicas
import LoginScreen from "../components/loginScreen/LoginScreen";
import Registro from "../components/loginScreen/Registrar";
import RegistrarFinish from "../components/loginScreen/RegistrarFinish";
import IngresoPin from "../components/loginScreen/IngresoPin";

//Componentes Privadas
import MenuPrincipal from "../components/cajeroAutomatico/MenuPrincipal";
import SaldosPersonales from "../components/cajeroAutomatico/SaldosPersonales";

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

        <Routes>
          {/*Rutas privadas*/}
          <Route path="/main_menu" element={<MenuPrincipal />} />
          <Route path="/main_menu/balances" element={<SaldosPersonales />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
