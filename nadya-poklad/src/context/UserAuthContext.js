import { createContext, useEffect, useState, useContext } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase-config'
import { Navigate } from 'react-router-dom'


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const [user, setUser] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );


  function logIn(email, password) {
    return new Promise((resolve, reject) => {
      if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
          .then((credentials) => {
            // Autenticación exitosa
            setIsLoggedIn(true);
            localStorage.setItem("is-Logged-In", true);
            resolve(credentials.user);
          })
          .catch((error) => {
            // Manejar el caso de error
            setIsLoggedIn(false);
            localStorage.removeItem("is-Logged-In");
            reject({ message: error.message });
            <Navigate to="/login_admin" />
          });
      } else {
        setIsLoggedIn(false);
        localStorage.removeItem("is-Logged-In");
      }
    })
  }

  function passwordReset(email) {
    console.log('Email', email);
    return sendPasswordResetEmail(auth, email);
  }

  function logOut() {
    setIsLoggedIn(false);
    localStorage.removeItem(JSON.stringify("is-Logged-In"), false);
    setUser('')
  //  console.log('is Logged In:', isLoggedIn)
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, passwordReset, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userAuthContext);
}