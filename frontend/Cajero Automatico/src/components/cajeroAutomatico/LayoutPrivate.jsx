import UseAuth from "../../helpers/UseAuth";
import { Navigate, Outlet } from "react-router-dom";

const LayoutPrivate = () => {
  const { Autenticado } = UseAuth();
  console.log("Layout Private", Autenticado);

  // Verificar si Autenticado está definido y si idUsuario está presente
  if (!Autenticado || !Autenticado.user?.idUsuario) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutPrivate;
