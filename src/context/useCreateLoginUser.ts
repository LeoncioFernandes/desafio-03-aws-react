import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from '../types/UserTypes';

export const useCreateLoginUser = create<UserState>()(
  persist(
      (set, get) => ({
        users: [],
        addUser: (user) => set((state) => {
          const usr = state.users.find(us => us.uid === user.uid);
          if(usr){
              usr.accessToken = user.accessToken;
              return { users: state.users };
          }else{
              return({ users: [...state.users, user] })
          } 
        }),
        getUserByUid: (uid) => {
          const state = get();
          const findUser = state.users.find(us => {
            return us.uid === uid
          })
          if(findUser){
            return findUser
          }
          return undefined
        },
        logoffUserByUid: (uid) => set((state) => {
            const findUser = state.users.find(us => {
              return us.uid === uid
            })
            if(findUser){
              findUser.accessToken = undefined;
              return ({users: state.users})
            }
            return ({users: state.users})
        }),
        logoffAllUsers: () => set((state) => {
          state.users.map((user) => {
            return user.accessToken = undefined;
          })
          return ({users: state.users})
        }),
        findUsers: (displayName) => {
          if(!displayName ){
            return undefined;
          }
          const state = get();
          const findUsers = state.users.filter(us => {
              return us.displayName?.toLowerCase().includes(displayName.toLowerCase()) 
          })
          if(findUsers){
              return findUsers
          }
          return undefined
        }
      }),
      { name: 'created-users' }
  ),
)