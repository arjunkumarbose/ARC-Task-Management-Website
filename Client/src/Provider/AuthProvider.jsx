/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext([]);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    register,
    profile,
    login,
    user,
    logout,
    google,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
