// import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
// import { useUserLoged } from '../../context/useLogedUser'
// import { useNavigate } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Card from '../../components/Card/Card';
import CardAdd from '../../components/Card/CardAdd';
import { useState } from 'react';

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
      

      <div className='flex flex-col gap-32 items-center mt-[236px]'>
        <div className='flex justify-between items-center max-w-[1240px] w-full'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-64 h-64 bg-primary_color rounded-full border-2 border-dark_green drop-shadow-[4px_00px_0px_rgba(23,42,58,1)]'></div>
            <h1 className='text-[64px] font-bold leading-10'>Leoncio</h1>
            <p className='text-[25px] font-medium leading-7'>Paraíba, SP</p>
            <p className='text-[25px] font-medium leading-7'>teste@teste.com</p>
          </div>
          <div className='flex flex-col gap-8 max-w-[500px] w-full'>
            <div className='flex flex-col text-[64px] font-bold leading-10 gap-7'>
              <p>Hello,</p>
              <p>I'm <span className='text-primary_color'>Fulano</span>,</p>
            </div>
            <p className='text-[25px] font-medium leading-8 max-w-[445px]'>
              Olá, meu nome é Felipe Pato e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!
            </p>
            <div className='flex gap-7'>
              <a
                className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-dark_green max-w-[194px] w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)]'
                href="/"
              >
                Github
              </a>
              <div className='relative flex w-full'>
                <a
                  className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-dark_green w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)]'
                  href="/"
                >
                  Linkedin
                </a>
                <div className='absolute -right-1 -top-1'>
                  <ButtonEdit />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='flex flex-col gap-16 max-w-[1240px] w-full p-16 text-secondary_text bg-card_color rounded-[20px]'>
          <p className='text-[64px] font-bold leading-none'>Minha história</p>
          <p className='text-2xl font-bold leading-none text-tertiary_text'>Não há nenhuma história para contar!</p>
        </div>

        <div className='flex flex-col items-center gap-16 w-full bg-secondary_color text-secondary_text p-16'>
          <p className='text-[64px] font-bold leading-none'>Experiências</p>
          {/* <p className='text-[40px] font-normal leading-none text-tertiary_text'>Não há nada por aqui!</p> */}
          <div className='flex flex-row flex-wrap gap-11 max-w-[865px] w-full'>
            
                <Card
                  title='Dev Junior da NASA'
                  period='Junho - 2002 - 2020'
                  skills='Figma, React, Typescript'
                  experience='Trabalhei com figma na nasa construindo designs de foguetes usando figma pro Elon Musk'
                  linkRepository=''
                />
             
            
            <Card
              title='Projetão Fellas'
              period='2 meses'
              skills='Figma, React'
              experience='Um projetão fellas da minha cidade que é muito fellas, um projeto tão fellas que não deixa de ser fellas, um projetinho fellas feito pra ser fellas, agora continuarei escrevendo pra ocupar espaço e ocupar mais espaço e ocupar mais espaço'
              linkRepository='/'
            />
            <CardAdd />
            
          </div>
        </div>

        <div className='flex flex-col gap-16'>
          <p className='text-[42px] text-center leading-none font-bold text-dark_green max-w-[1240px]'>Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>
          <div className='flex justify-center gap-[7px] mt-5'>
            <SocialMedia />
            <SocialMedia />
            <SocialMedia />
            <SocialMedia />
          </div>
          <div className='flex gap-[84.5px] justify-center mb-[69px] text-dark_green text-[25px] font-medium'>
            <div className='flex items-center gap-3'>
              <MdPlace className='h-[35px] w-[35px]' />
              <p>Brasil</p>
            </div>
            <p>© 2024, All Rights By Compass UOL</p>
          </div>
        </div>
      </div>

    </div>
  )
}
