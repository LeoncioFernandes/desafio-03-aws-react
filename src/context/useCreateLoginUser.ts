import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from '../types/UserTypes';
import { title } from 'process';

export const useCreateLoginUser = create<UserState>()(
  persist(
      (set, get) => ({
        users: [],
        addUser: (user) => set((state) => {
          const usr = state.users.find(us => us.id === user.id);
          if(usr){
              usr.token = user.token;
              return { users: state.users };
          }else{
              return({ users: [...state.users, user] })
          } 
        }),
        getUserByUid: (id) => {
          const state = get();
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            return findUser
          }
          return undefined
        },
        logoffUserByUid: (id) => set((state) => {
            const findUser = state.users.find(us => {
              return us.id === id
            })
            if(findUser){
              findUser.token = undefined;
              return ({users: state.users})
            }
            return ({users: state.users})
        }),
        logoffAllUsers: () => set((state) => {
          state.users.map((user) => {
            return user.token = undefined;
          })
          return ({users: state.users})
        }),
        findUsers: (displayName) => {
          if(!displayName ){
            return undefined;
          }
          const state = get();
          const findUsers = state.users.filter(us => {
              return us.name?.toLowerCase().includes(displayName.toLowerCase()) 
          })
          if(findUsers){
              return findUsers
          }
          return undefined
        },
        changeNamePersonal: (id, namePersonal) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.namePersonal = namePersonal;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeAdditionalEmail: (id, additionalEmail) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.additionalEmail = additionalEmail;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeHistoryPersonal: (id, historyPersonal) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.historyPersonal = historyPersonal;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeLinkLinkedin: (id, linkLinkedin) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.linkLinkedin = linkLinkedin;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeLinkInstagram: (id, linkInstagram) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.linkInstagram = linkInstagram;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeLinkTwitter: (id, linkTwitter) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.linkTwitter = linkTwitter;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeLinkFacebook: (id, linkFacebook) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.linkFacebook = linkFacebook;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        changeLinkYouTube: (id, linkYouTube) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            findUser.linkYouTube = linkYouTube;
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        addCard: (id, title, period, skills, experiences, linkRepository) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === id
          })
          if(findUser){
            if(findUser.experiences?.length === 0){
              findUser.experiences?.push({id: 1, title: title, period: period, skills: skills, experiences: experiences, linkRepository: linkRepository});
            }else{
              const length = findUser.experiences?.length
              const newId = findUser.experiences![length! - 1].id + 1
              findUser.experiences?.push({id: newId, title: title, period: period, skills: skills, experiences: experiences, linkRepository: linkRepository});
            }
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        editCard: (idUser, idCard, title, period, skills, experiences, linkRepository) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === idUser
          })
          if(findUser){
            const card = findUser.experiences?.find(cd => {
              return cd.id === idCard
            })
            if(card){
              card.title = title
              card.period = period
              card.skills = skills
              card.experiences = experiences
              card.linkRepository = linkRepository
              return ({users: state.users})
            }
            return ({users: state.users})
          }
          return ({users: state.users})
        }),
        deleteCard: (idUser, idCard) => set((state) => {
          const findUser = state.users.find(us => {
            return us.id === idUser
          })
          if(findUser){
            const cards = findUser.experiences?.filter(cd => {
              return cd.id !== idCard
            })

            findUser.experiences = cards
            
            return ({users: state.users})
          }
          return ({users: state.users})
        })
      }),
      { name: 'created-users' }
  ),
)