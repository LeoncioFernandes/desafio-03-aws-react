import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserLogedState } from '../types/UserTypes';


export const useUserLoged = create<UserLogedState>()(
    persist(
        (set) => ({
            userLoged: {
              uid: undefined, 
              displayName: undefined, 
              email: undefined, 
              photoURL: undefined, 
              accessToken: undefined
            },
            addUserLoged: (user) => set(() => ({
              userLoged: user
            })),
            removeUserLoged: () => set(() => ({
              userLoged: {
                uid: undefined, 
                displayName: undefined, 
                email: undefined, 
                photoURL: undefined, 
                accessToken: undefined
              },
            })),
        }),
        { name: 'user-loged' }
    ),
)