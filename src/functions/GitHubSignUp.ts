import { app } from "../firebaseConfig";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export const GitHubSignUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
  
    return token;
  } catch (error) {
    console.error('Erro ao realizar login com GitHub:', error);
  }
};