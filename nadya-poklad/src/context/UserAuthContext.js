import { createContext, useEffect, useState, useContext } from 'react';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase-config'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") || false
      );

    const init =() =>{
        const userLogged = JSON.parse(localStorage.getItem("is_Logged_In"))

        return {
            isLoggedIn: !!userLogged,

        }
    }

        
    function  logIn (email, password) {
         
        console.log('Email', email );
        setUser(JSON.stringify(signInWithEmailAndPassword(auth, email, password)));
        setIsLoggedIn(true);
        // console.log('is Logged In:', isLoggedIn , 'email=', email);
        localStorage.setItem(JSON.stringify("is-Logged-In"), true);
        console.log(user)
        
        return logIn

    }


    function passwordReset (email) {
            console.log('Email', email );
            return sendPasswordResetEmail(auth, email);
    }
        
    function logOut() {
       setIsLoggedIn(false);
       localStorage.removeItem(JSON.stringify("is-Logged-In"), false);
       setUser('')

        console.log( 'is Logged In:', isLoggedIn )
        return  signOut(auth);
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

export function useUserAuth () {
    return useContext(userAuthContext);
}
