import React from 'react'
import { useUserLoged } from '../../context/useLogedUser'
import { useNavigate } from "react-router-dom";

export default function ButtonLogoff() {

  const userLoged = useUserLoged();
  const navigate = useNavigate();

  function Logoff(){
    userLoged.removeUserLoged();
    return navigate('/');
  }

  return (
    <button className='flex items-center gap-4' onClick={() => Logoff()}>
      <div>Sair</div>
      <div className='w-[77px] h-[77px] bg-primary_color rounded-full'></div>
    </button>
  )
}
