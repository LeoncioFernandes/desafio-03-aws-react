import { app } from "../firebaseConfig";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { User, UserResponse } from "../types/UserTypes";
import { useCreateLoginUser } from "../context/useCreateLoginUser";
import { useUserLoged } from "../context/useLogedUser";
import { useNavigate } from "react-router-dom";

export const useGitHubSignUp = () => {

  const gitHubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const createLoginUser = useCreateLoginUser();
  const userLoged = useUserLoged();
  const navigate = useNavigate();

  const handleGitHubSignUp = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((response) => {
        const {displayName, email, photoURL, uid, stsTokenManager }: UserResponse = response.user.toJSON() as UserResponse
        const user: User = {
          uid: uid,
          displayName: displayName || "",
          email: email || "",
          photoURL: photoURL || "",
          accessToken: stsTokenManager.accessToken
        }
        createLoginUser.addUser(user);
        userLoged.addUserLoged(user);

        return navigate('/portfolio');
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return handleGitHubSignUp;
}