import { SocialNetwork } from "./EnumSocialNetwork";

export type EditingProps = {
    onEditing: (onEdit: boolean, linkSocialMedia: string, socialMedia: SocialNetwork) => void;
    editing: boolean
    linkSocialMedia?: string
    socialMedia: SocialNetwork
    imageSocialMedia: string
};

export type FormAddEditProps = {
    onEditing: (onEdit: boolean) => void;
    linkUrl: string
    socialNetwork: SocialNetwork
    setSocialNetwork: (linkUrl: string, socialNetwork: SocialNetwork) => void
};