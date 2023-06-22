import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const authContext = createContext(null);

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creating user ------------------------------------------------------
    const createUser = (email, password) => {
        setLoading(true);loading
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in ------------------------------------------------------------
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // // Log out ----------------------------------------------------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Sign in with Google --------------------------------------------------
        const signInWithGoogle = () =>{
            return signInWithPopup(auth, googleAuthProvider)
        }

    // Sign in with GitHub --------------------------------------------------
        const signInWithGithub =() =>{
            return signInWithPopup(auth, githubAuthProvider  )
        }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])

    


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;