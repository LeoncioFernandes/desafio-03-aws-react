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
          findUsers: (displayName) => {
              const state = get();
              const findUsers = state.users.filter(us => {
                  return us.displayName === displayName 
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