// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signUpForm/signUpForm";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/FirebaseUtils";

const SingIn = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
    
  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user); 
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
      {/*<button onClick={signInWithGoogleRedirect}>Sing in with Google Popup</button> */}
      <SignUpForm />
    </div>
  );
};

export default SingIn;
