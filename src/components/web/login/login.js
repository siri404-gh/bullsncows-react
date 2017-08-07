import React from 'react';
import firebase from "firebase/app";
import firebaseui from 'firebaseui';
import "firebase/auth";
import 'firebaseui/dist/firebaseui.css';
import { Loader } from '../presentational/Loader/Loader';
import Styles from './login.less';

firebase.initializeApp({
  apiKey: "AIzaSyCyWyJYEXpl8rxyedqxRRuVGg4cc423nnU",
  authDomain: "reactultimate.firebaseapp.com",
});

// FirebaseUI config.
const uiConfig = {
  signInSuccessUrl: '.',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
};

const initApp = function (toggleLogin, toggleLoading, saveUser) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      user.getIdToken().then(function (accessToken) {
        saveUser({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          accessToken: accessToken,
          providerData: user.providerData
        });
        toggleLogin();
        toggleLoading();
      });
    } else {
      toggleLoading();
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, function (error) {
    console.log(error);
  });
};

const Login = ({ loading, toggleLogin, toggleLoading, saveUser }) => {
  window.addEventListener('load', function () {
    initApp(toggleLogin, toggleLoading, saveUser);
  });
  return (
    <div>
      {loading && <Loader />}
      <div id="firebaseui-auth-container" className={Styles.firebaseLoader}></div>
    </div>
  );
};

export default Login;
