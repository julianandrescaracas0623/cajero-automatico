import UseAuth from "../../helpers/UseAuth";
import { Navigate, Outlet } from "react-router-dom";

const LayoutPublic = () => {
  const { Autenticado } = UseAuth();
  console.log("Layout Publico", Autenticado);

  return (
    <>
      {!Autenticado?.user?.idUsuario ? (
        <Outlet />
      ) : (
        <Navigate to="/main_menu" />
      )}
    </>
  );
};

export default LayoutPublic;
