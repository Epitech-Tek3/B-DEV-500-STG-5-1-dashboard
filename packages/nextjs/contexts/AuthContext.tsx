import "firebase/auth";
import { addNewNotification } from "@libraries/queries/notification/createNotification";
import { auth, database } from "@libraries/firebase";
import { getLocalStorage } from "@libraries/localstorage/getLocalStorage";
import { setLocalStorage } from "@libraries/localstorage/setLocalStorage";
import firebase from "firebase/app";
import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext(undefined);

const handleNewUser = async (user: firebase.User) => {
  await database.user.doc(user.uid).set({
    id: user.uid,
    isComplete: false,
    token: (await user.getIdTokenResult()).token,
    email: user.email
  });
  !user.emailVerified && (await user.sendEmailVerification());
  await addNewNotification({
    title: `Bienvenue sur Dashboard ${user.displayName}`,
    type: "welcome",
    userId: user.uid,
    hasOpened: false
  });
  !user.emailVerified &&
    (await addNewNotification({
      title: `Un mail de vérification a été envoyé a l'adresse "${user.displayName}".`,
      type: "information",
      userId: user.uid,
      hasOpened: false
    }));
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) throw "auth/password-not-match";
    if (password.length <= 5) throw "auth/password-too-short";
    if (password.length > 40) throw "auth/password-too-long";
    try {
      return await handleNewUser((await auth.createUserWithEmailAndPassword(email, password)).user);
    } catch (e) {
      throw e.code;
    }
  };

  const signin = async (email: string, password: string) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      throw e.code;
    }
  };

  const checkEmail = async (email: string) => {
    return (await database.user.where("email", "==", email).get()).docs.length ? true : false;
  };

  function getProvider(providerId) {
    switch (providerId) {
      case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
        return new firebase.auth.GoogleAuthProvider();
      case new firebase.auth.OAuthProvider("microsoft.com").providerId:
        return new firebase.auth.OAuthProvider("microsoft.com");
      case firebase.auth.GithubAuthProvider.PROVIDER_ID:
        return new firebase.auth.GithubAuthProvider();
      default:
        throw new Error(`No provider implemented for ${providerId}`);
    }
  }

  const supportedPopupSignInMethods = [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ];

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
      provider.addScope("https://www.googleapis.com/auth/photoslibrary");
      provider.addScope("https://www.googleapis.com/auth/drive");
      provider.addScope("https://mail.google.com/");
      provider.addScope("https://www.googleapis.com/auth/calendar");
      const user = await auth.signInWithPopup(provider);
      // @ts-ignore
      setLocalStorage("_acc", user.credential.accessToken);
      // @ts-ignore
      if (user.additionalUserInfo.isNewUser) await handleNewUser(user.user);
    } catch (e) {
      if (e.email && e.credential && e.code === "auth/account-exists-with-different-credential") {
        const providers = await firebase.auth().fetchSignInMethodsForEmail(e.email);
        const firstPopupProviderMethod = providers.find((p) => supportedPopupSignInMethods.includes(p));

        if (!firstPopupProviderMethod) {
          throw new Error(`Your account is linked to a provider that isn't supported.`);
        }

        const linkedProvider = getProvider(firstPopupProviderMethod);
        linkedProvider.setCustomParameters({ login_hint: e.email });

        const result = await firebase.auth().signInWithPopup(linkedProvider);
        result.user.linkWithCredential(e.credential);
      }
    }
  };

  const microsoftLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    try {
      const user = await auth.signInWithPopup(provider);
      // @ts-ignore
      setLocalStorage("_acc", user.credential.accessToken);
      // @ts-ignore
      if (user.additionalUserInfo.isNewUser) await handleNewUser(user.user);
    } catch (e) {
      if (e.email && e.credential && e.code === "auth/account-exists-with-different-credential") {
        const providers = await firebase.auth().fetchSignInMethodsForEmail(e.email);
        const firstPopupProviderMethod = providers.find((p) => supportedPopupSignInMethods.includes(p));

        if (!firstPopupProviderMethod) {
          throw new Error(`Your account is linked to a provider that isn't supported.`);
        }

        const linkedProvider = getProvider(firstPopupProviderMethod);
        linkedProvider.setCustomParameters({ login_hint: e.email });

        const result = await firebase.auth().signInWithPopup(linkedProvider);
        result.user.linkWithCredential(e.credential);
      }
    }
  };

  const githubLogin = async () => {
    try {
      const user = await auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
      if (user.additionalUserInfo.isNewUser) await handleNewUser(user.user);
    } catch (e) {
      if (e.email && e.credential && e.code === "auth/account-exists-with-different-credential") {
        const providers = await firebase.auth().fetchSignInMethodsForEmail(e.email);
        const firstPopupProviderMethod = providers.find((p) => supportedPopupSignInMethods.includes(p));

        if (!firstPopupProviderMethod) {
          throw new Error(`Your account is linked to a provider that isn't supported.`);
        }

        const linkedProvider = getProvider(firstPopupProviderMethod);
        linkedProvider.setCustomParameters({ login_hint: e.email });

        const result = await firebase.auth().signInWithPopup(linkedProvider);
        result.user.linkWithCredential(e.credential);
      }
    }
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email: string) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password: string) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }
      const accessToken =
        // @ts-ignore
        // eslint-disable-next-line prettier/prettier
        getLocalStorage("_acc") || (await (await firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.GoogleAuthProvider.credential())).credential.accessToken);

      const userData = (await database.user.doc(user.uid).get()).data();
      setCurrentUser({ ...user, ...userData, accessToken });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signin,
    signup,
    setCurrentUser: (v) => setCurrentUser(v),
    checkEmail,
    googleLogin,
    microsoftLogin,
    githubLogin,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
