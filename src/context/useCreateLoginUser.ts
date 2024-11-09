import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from '../types/UserTypes';

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
        }
      }),
      { name: 'created-users' }
  ),
)