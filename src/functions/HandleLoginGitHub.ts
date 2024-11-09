// import { useCreateLoginUser } from "../context/useCreateLoginUser";
import { User } from "../types/UserTypes";
import { GitHubSignUp } from "./GitHubSignUp";
// import { useNavigate } from "react-router-dom";

export const HandleLoginGitHub = async () => {
    // const userById = useCreateLoginUser();
    const token = await GitHubSignUp();
    // const navigate = useNavigate();
    
    if(token){
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profileData: User = await response.json();
      
      const user: User = {
        id: profileData.id,
        token: token,
        name: profileData.name,
        login: profileData.login,
        email: profileData.email,
        html_url: profileData.html_url,
        avatar_url: profileData.avatar_url,
        bio: profileData.bio,
        location: profileData.location,
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

      const id = profileData.id
    //   userById.addUser(user);
        
    //   return navigate(`/portfolio/${profileData.id}`);

    return user
    }
  }