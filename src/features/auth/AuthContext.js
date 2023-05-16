import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";

// Create a new context for the authentication service
export const AuthContext = createContext({
  auth: auth,
  user: null,
});

// Create a hook to quickly use the auth context
export const useAuth = () => useContext(AuthContext);

// Create an Authentication Provider component to wrap the app and provide the auth service
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ auth, user }}>{children}</AuthContext.Provider>;
};
