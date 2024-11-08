export type User = {
  uid: string | undefined
  displayName: string | undefined,
  providerId: string | undefined,
  screenName: string | undefined,
  email?: string | undefined,
  accessToken: string | undefined
  photoURL: string | undefined
  namePersonal?: string | undefined,
  linkLinkedin?: string | undefined,
  historyPersonal?: string | undefined,
  experiences?: {
    id: number
    title: string,
    period: string,
    skills: string,
    experiences: string,
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
  getUserByUid: (uid: string) => User | undefined,
  logoffUserByUid: (uid: string) => void,
  findUsers: (displayName: string) => User[] | undefined,
  logoffAllUsers: () => void
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
  },
  reloadUserInfo: {
    providerUserInfo: {
      providerId: string,
      screenName: string,
    }[]
  }
}