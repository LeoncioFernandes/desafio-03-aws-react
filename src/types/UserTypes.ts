export type User = {
  uid: string | undefined
  displayName: string | undefined,
  email?: string | undefined,
  accessToken: string | undefined
  photoURL: string | undefined
  namePersonal?: string | undefined,
  linkLinkedin?: string | undefined,
  historyPersonal?: string | undefined,
  experiences?: {
    title: string | undefined,
    period: string | undefined,
    skills: string | undefined,
    experiences: string | undefined,
    linkRepository?: string | undefined,
  }[],
  additionalEmail?: string | undefined,
  linkInstagram?: string | undefined,
  linkFacebook?: string | undefined,
  linkTwitter?: string | undefined,
  linkYouTube?: string | undefined
}

export interface UserState {
  users: User[],
  addUser: (i: User) => void,
  findUsers: (displayName: string) => User[] | undefined
}

export interface UserLogedState {
  userLoged: User
  addUserLoged: (i: User) => void
  removeUserLoged: () => void
}

export type UserResponse = {
  displayName: string,
  email: string | undefined,
  photoURL: string,
  uid: string,
  stsTokenManager: {
    accessToken: string,
    expirationTime: number
  }
}