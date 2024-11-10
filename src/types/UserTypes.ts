export type User = {
  id: number
  token: string | undefined
  name: string | undefined,
  login: string | undefined,
  email?: string | undefined,
  html_url: string | undefined
  avatar_url: string | undefined
  bio: string | undefined
  location: string | null
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
  getUserByUid: (id: number) => User | undefined,
  logoffUserByUid: (id: number) => void,
  findUsers: (displayName: string) => User[] | undefined,
  logoffAllUsers: () => void,
  changeNamePersonal: (id: number, namePersonal: string) => void
  changeAdditionalEmail: (id: number, additionalEmail: string) => void
  changeHistoryPersonal: (id: number, historyPersonal: string) => void
  changeLinkLinkedin: (id: number, linkLinkedin: string) => void
  changeLinkInstagram: (id: number, linkInstagram: string) => void
  changeLinkFacebook: (id: number, linkFacebook: string) => void
  changeLinkTwitter: (id: number, linkTwitter: string) => void
  changeLinkYouTube: (id: number, linkYouTube: string) => void
  addCard: (id: number, title: string, period: string, skills: string, experiences: string, linkRepository: string) => void
  editCard: (idUser: number, idCard: number, title: string, period: string, skills: string, experiences: string, linkRepository: string) => void
  deleteCard: (idUser: number, idCard: number) => void
}

export interface UserLogedState {
  userLoged: User
  addUserLoged: (i: User) => void
  removeUserLoged: () => void
}