// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signUpForm/signUpForm";
import SignInForm from "../../components/signInForm/SignInForm";

import { AuthenticationContainer } from "./AuthenticationStyle";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <AuthenticationContainer>
      {/*<button onClick={signInWithGoogleRedirect}>Sing in with Google Popup</button> */}
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
