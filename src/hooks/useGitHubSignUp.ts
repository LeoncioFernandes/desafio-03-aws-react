import { app } from "../firebaseConfig";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { User, UserResponse } from "../types/UserTypes";
import { useCreateLoginUser } from "../context/useCreateLoginUser";
import { useNavigate } from "react-router-dom";

export const useGitHubSignUp = () => {

  const gitHubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const createLoginUser = useCreateLoginUser();
  const navigate = useNavigate();

  const handleGitHubSignUp = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((response) => {
        
        const {displayName, email, photoURL, uid, stsTokenManager, reloadUserInfo }: UserResponse = response.user as unknown as UserResponse
        
        const user: User = {
          uid: uid,
          displayName: displayName || "",
          providerId: reloadUserInfo.providerUserInfo[0].providerId,
          screenName: reloadUserInfo.providerUserInfo[0].screenName,
          email: email || "",
          accessToken: stsTokenManager.accessToken,
          photoURL: photoURL || "",
          namePersonal: "",
          linkLinkedin: "",
          historyPersonal: "",
          experiences: [],
          additionalEmail: "",
          linkInstagram: "",
          linkFacebook: "",
          linkTwitter: "",
          linkYouTube: ""
        }
        createLoginUser.addUser(user);
        
        return navigate(`/portfolio/${uid}`);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return handleGitHubSignUp;
}