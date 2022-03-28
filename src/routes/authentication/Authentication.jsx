// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signUpForm/signUpForm";
import SignInForm from "../../components/signInForm/SingInForm";

import "./Authentication.scss";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      {/*<button onClick={signInWithGoogleRedirect}>Sing in with Google Popup</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
