import React, { createContext, useEffect, useState } from 'react';
import app from '../Fireabase/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";


export const AuthContext = createContext(null);


const auth = getAuth(app)


const Provider = ({children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser =(email,password)=>{

        return createUserWithEmailAndPassword(auth, email, password)

    }
    const googleUser =()=>{
           return signInWithPopup(auth,googleProvider)
    }
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(signedUser, displayName, url) =>{
        return updateProfile(signedUser,{
            displayName: displayName,
            photoURL: url
        })
    }
    const logOut = () =>{
        return signOut(auth)
    }




    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            // console.log(currentuser);
            setLoading(false);
        })
        return ()=>{
            return unSubscribe();
        }

    },[])



    const authInfo = {
        createUser,
        googleUser,
        login,
        updateUser,
        logOut, 
        user,
        loading
    }

    return (
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
    );
};

export default Provider;