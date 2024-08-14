import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
      setAuth({
        ...auth,
        token: data.auth,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
