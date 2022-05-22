import React, { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOutUser = (email, password) => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    registerUser,
    loginUser,
    logOutUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
