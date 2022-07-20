import React from "react";
import { createContext,useState } from "react";

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {

 const [currentUser, setCurrentUser] = useState(null);

  return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
