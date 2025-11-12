import React, { createContext, useContext, useEffect, useState } from "react";
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


const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [desiredlocation,setDesiredLocation]=useState(null)
  const [Loading, setLoading] = useState(true);





function registerWithEmailPass(email, pass) {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, pass);
}

function handleUpdateProfile(data) {
   setLoading(true);
  return updateProfile(auth.currentUser, data);
}

function handleSignInWithEmailPass(email, pass) {
   setLoading(true);
  return signInWithEmailAndPassword(auth, email, pass);
}

function handleSignOut() {
   setLoading(true);
  return signOut(auth);
}

const googleAuthProvider = new GoogleAuthProvider();

function handleSignInWithGoogle() {
   setLoading(true);
  return signInWithPopup(auth, googleAuthProvider);
}



  useEffect(() => {
    onAuthStateChanged(auth, (userCondition) => {
      setUser(userCondition);
       setLoading(false);
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
    Loading,
    setLoading
  };
  return <AuthContext value={Context}>{children}</AuthContext>;
};

export default ContextProvider;
