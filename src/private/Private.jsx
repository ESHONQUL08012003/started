// import React, {useEffect} from "react";
import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  let token = true;

  return <>{token ? <Outlet /> : <Navigate to="/login"/>}</>;
};

export default Private;
