import React, { useEffect } from "react";
// import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  //! geneli ilgilendiren user bilglerini contexte tuttum.

  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    //? sayfa render oldugunda sessionStorage dan user bilgisini aldım. session storage atmayı ise login kısmında yaptım. fakat bunun için firebase bana bir method saglıyor.
   
    userObserver(setCurrentUser);

    //! useEffecte atmamızın sebebi basta false olan degeri gelen dataya göre güncellemek.
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setVoteClass }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
