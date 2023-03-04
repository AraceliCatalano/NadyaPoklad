import { createContext, useEffect, useState, useContext } from 'react';
import {
    signInWithEmailAndPassword,
    browserSessionPersistence,
    setPersistence,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase-config'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState("");
    

    function logIn(email, password) {
        console.log('Email', email);
        return signInWithEmailAndPassword(auth, email, password);
    }
    function passwordReset (email) {
        console.log('Email', email);
        return sendPasswordResetEmail(auth, email);
    }

    function logOut() {
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
