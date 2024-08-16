import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState(() => {
    // Retrieve the token from localStorage if it exists
    const savedToken = localStorage.getItem('auth');
    return { token: savedToken || null };
  });

  useEffect(() => {
    // Persist the token to localStorage whenever it changes
    if (auth.token) {
      localStorage.setItem('auth', auth.token);
    }
  }, [auth]); 

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
