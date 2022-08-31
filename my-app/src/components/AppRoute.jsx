import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contex";

import { publicRoutes, privateRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRoute = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>  
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.index + 4}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}

<Route path="*" element={<Navigate to="/posts" />} />

      
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.index + 4}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoute;
