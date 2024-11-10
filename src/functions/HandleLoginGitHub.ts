import { User } from "../types/UserTypes";
import { GitHubSignUp } from "./GitHubSignUp";

export const HandleLoginGitHub = async () => {
    
    const token = await GitHubSignUp();
    
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
        namePersonal: "Fulano",
        linkLinkedin: "",
        historyPersonal: "",
        experiences: [],
        additionalEmail: "",
        linkInstagram: "",
        linkFacebook: "",
        linkTwitter: "",
        linkYouTube: ""
      }
    
    return user
    }
  }