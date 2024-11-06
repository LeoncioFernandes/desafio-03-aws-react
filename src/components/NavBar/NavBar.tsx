import React from 'react'
import ButtonLogoff from './ButtonLogoff'
import { useUserLoged } from '../../context/useLogedUser'
import ButtonLogin from './ButtonLogin';

export default function NavBar() {

  const userLoged = useUserLoged().userLoged;

  return (
    <nav className='fixed top-0 left-0 right-0 z-10'>
      <div className='relative flex bg-dark_green py-9 font-medium text-3xl text-secondary_text justify-center rounded-b-[35.6px]'>
        <ul className='flex gap-16'>
          <li>Início</li>
          <li>Minha História</li>
          <li>Experiências</li>
          <li>Contato</li>
        </ul>
        <div className='absolute right-8 top-4'>
          {userLoged.accessToken ? (
            <ButtonLogoff />
            ) : (
            <ButtonLogin />
          )}
        </div>
      </div>
    </nav>
  )
}
