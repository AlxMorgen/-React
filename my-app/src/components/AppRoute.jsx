import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contex";

import { publicRoutes, privateRoutes } from "../router/routes";

const AppRoute = () => {
  const {isAuth} = useContext(AuthContext)
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
