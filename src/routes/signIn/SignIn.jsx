import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/FirebaseUtils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
    </div>
  );
};

export default SingIn;
