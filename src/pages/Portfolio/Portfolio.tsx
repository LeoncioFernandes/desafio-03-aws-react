// import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
// import { useUserLoged } from '../../context/useLogedUser'
// import { useNavigate } from "react-router-dom";

export default function Portfolio() {

  // const userLoged = useUserLoged().userLoged;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!userLoged.accessToken){
  //     return navigate('/');
  //   }
  // }, [])
  
  return (
    <div>
      <NavBar />
      <div className='flex justify-center mt-[236px]'>
        <div className='flex justify-between items-center max-w-[1240px] w-full'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-64 h-64 bg-primary_color rounded-full border-2 border-dark_green drop-shadow-[4px_00px_0px_rgba(23,42,58,1)]'></div>
            <h1 className='text-[64px] font-bold leading-none'>Leoncio</h1>
            <p className='text-[25px] font-medium'>Paraíba, SP</p>
            <p className='text-[25px] font-medium'>teste@teste.com</p>
          </div>
          <div className='flex flex-col gap-8 max-w-[445px]'>
            <div className='flex flex-col text-[64px] font-bold leading-none gap-7'>
              <p>Hello,</p>
              <p>I'm <span className='text-primary_color'>Fulano</span>,</p>
            </div>
            <p className='text-[25px] font-medium'>
              Olá, meu nome é Felipe Pato e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!
            </p>
            <a className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-dark_green max-w-[194px] text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)]' href="/">Github</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
