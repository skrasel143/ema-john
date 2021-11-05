import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react"
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    }, [])

    return {
        user, 
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
}

export default useFirebase;