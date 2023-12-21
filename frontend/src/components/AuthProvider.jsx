import { createContext, useContext, useState } from "react";

import React from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const setAuthData = (new_user) => setUser(new_user);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
