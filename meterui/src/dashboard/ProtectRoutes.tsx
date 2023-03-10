import { Link,Outlet,Navigate } from "react-router-dom";
// import { isLogged } from "../client";

export const ProtectRoute = () => {
  return (
1? <Outlet />:
          <Navigate
            to="/login"
          />
  );
};
