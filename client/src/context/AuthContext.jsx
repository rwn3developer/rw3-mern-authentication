import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = () => {
  const [auth, setAuth] = useState({
    token: null,
  });

  <AuthContext Provider={[auth, setAuth]}></AuthContext>;

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
      setAuth({
        ...auth,
        token: data.auth,
      });
    }
  }, []);
};

export default AuthProvider;
