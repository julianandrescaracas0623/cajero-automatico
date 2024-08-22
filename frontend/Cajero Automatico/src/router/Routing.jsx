import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes Publicas
import LoginScreen from "../components/loginScreen/LoginScreen";
import Registro from "../components/loginScreen/Registrar";
import RegistrarFinish from "../components/loginScreen/RegistrarFinish";
import IngresoPin from "../components/loginScreen/IngresoPin";

//Componentes Privadas
import LayoutPrivate from "../components/cajeroAutomatico/LayoutPrivate";
import MenuPrincipal from "../components/cajeroAutomatico/MenuPrincipal";
import SaldosPersonales from "../components/cajeroAutomatico/SaldosPersonales";
import { AuthProvider } from "../helpers/AuthProvier";
import LayoutPublic from "../components/loginScreen/LayoutPublic";
import RetirarSaldo from "../components/cajeroAutomatico/RetirarSaldo";

//Componenestes Error
import Error from "../components/error/Error";
import ConsignarSaldo from "../components/cajeroAutomatico/ConsignarSaldo";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          {/* Rutas públicas */}
          <Routes>
            <Route path="/" element={<LayoutPublic />}>
              <Route index element={<LoginScreen />} />
              <Route path="/pinentry" element={<IngresoPin />} />
              <Route path="/register" element={<Registro />} />
              <Route path="/registerFinish" element={<RegistrarFinish />} />
            </Route>

            {/* Rutas privadas */}
            <Route path="/main_menu" element={<LayoutPrivate />}>
              <Route index element={<MenuPrincipal />} />

              {/* Rutas Saldos Personas */}
              <Route
                path="/main_menu/balances"
                element={<SaldosPersonales />}
              />

              {/* Rutas Retirar Saldo */}
              <Route
                path="/main_menu/withdraw-balances"
                element={<RetirarSaldo />}
              />

              <Route
                path="/main_menu/retired-balances"
                element={<SaldosPersonales />}
              />

              {/* Rutas Consignar Saldo */}
              <Route
                path="/main_menu/deposit-balance"
                element={<ConsignarSaldo />}
              />

              <Route
                path="/main_menu/consign-deposit/:idCuenta"
                element={<SaldosPersonales />}
              />

            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Routing;
