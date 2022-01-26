import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((e) => (
        <Route path={e.path} element={<e.element />} key={e.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((e) => (
        <Route path={e.path} element={<e.element />} key={e.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
