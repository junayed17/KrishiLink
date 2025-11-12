import React, { createContext, useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

function registerWithEmailPass(email, pass) {
  return createUserWithEmailAndPassword(auth, email, pass);
}

function handleUpdateProfile(data) {
  return updateProfile(auth.currentUser, data);
}

function handleSignInWithEmailPass(email,pass) {
  return signInWithEmailAndPassword(auth,email,pass)
}


function handleSignOut() {
  return signOut(auth)
}

const googleAuthProvider = new GoogleAuthProvider();


function handleSignInWithGoogle() {
  return signInWithPopup(auth,googleAuthProvider)
}


const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [desiredlocation,setDesiredLocation]=useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (userCondition) => {
      setUser(userCondition);
    });
  }, []);

  const Context = {
    registerWithEmailPass,
    handleUpdateProfile,
    user,
    setUser,
    handleSignOut,
    handleSignInWithEmailPass,
    handleSignInWithGoogle,
    setDesiredLocation,
    desiredlocation,
  };
  return <AuthContext value={Context}>{children}</AuthContext>;
};

export default ContextProvider;
