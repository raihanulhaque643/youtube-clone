import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult : () => {
            return false;
        }
    }
  };

const signOut = () => {
    firebase.auth().signOut()
    .then(alert('Log out successful'))
}

const SignIn = () => {
    useEffect(() => {
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            if(user){
                localStorage.setItem('user', user.email);
            } else {
                localStorage.removeItem('user')
            }
        });
        return authObserver;
    })
    const [user, setUser] = useState(null);
    
    if(user) {
        return (
            <>
                <p>
                    Welcome, {user.displayName} <br/>
                    <small>{user.email}</small> <br/>
                    <button onClick={() => signOut()}>Sign out</button>
                </p>
            </>
        )
    } else {
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
};

export default SignIn;
