import React from 'react'
import { IoLogInOutline } from "react-icons/io5";
import { useGitHubSignUp } from '../../hooks/useGitHubSignUp';

export default function ButtonLogin() {

  const handleGitHubSignUp = useGitHubSignUp();
  
  return (
    <button
      className='flex items-center gap-[10px] px-5 py-5'
      onClick={handleGitHubSignUp}
    >
      <IoLogInOutline className='w-9 h-9' />
      <div>Entrar</div>
    </button>
  )
}
