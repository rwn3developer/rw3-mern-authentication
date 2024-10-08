import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
   

  return auth?.token ? <Outlet /> : <Navigate to={`/`} />;
};

export default Private;
