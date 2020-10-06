import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';

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
    .then(console.log('Log out successful'))
}

const SignIn = () => {
    useEffect(() => {
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
        return authObserver;
    })
    const [user, setUser] = useState(null);
    
    if(user) {
        return (
            <>
                <p>
                    Welcome, {user.displayName}{' '} 
                    {/* <small>{user.email}</small>  */}
                    <Button
                    variant="outlined"
                    color="primary"
                     onClick={() => signOut()}>Sign out</Button>
                </p>
            </>
        )
    } else {
        return (
            <div>
                <StyledFirebaseAuth 
                uiConfig={uiConfig} 
                firebaseAuth={firebase.auth()} 
                style={{margin: '0px'}}
                />
            </div>
        )
    }
};

export default SignIn;
