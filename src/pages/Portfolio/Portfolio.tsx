import NavBar from '../../components/NavBar/NavBar'
import { useParams, useNavigate } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Card from '../../components/Card/Card';
import CardAdd from '../../components/Card/CardAdd';
import { useEffect } from 'react';
import { useCreateLoginUser } from '../../context/useCreateLoginUser';

export default function Portfolio() {

  const {uid} = useParams<{uid: string}>();
  const navigate = useNavigate();
  const user = useCreateLoginUser().getUserByUid(uid || "");
  
  useEffect(() => {
    if(!uid){
      return navigate("/");
    }
    if(!user){
      return navigate("/");
    }
  }, [uid])
  
  return (
    <div>
      <NavBar />
      <div className='flex flex-col gap-32 items-center mt-[236px]'>
        <div className='flex justify-between items-center max-w-[1240px] w-full'>
          <div className='flex flex-col items-center gap-4'>
            <div className='relative flex items-center justify-center'>
              <div className='w-64 h-64 bg-primary_color rounded-full border-2 border-dark_green drop-shadow-[4px_00px_0px_rgba(23,42,58,1)] overflow-hidden'></div>
              <img className='absolute w-[252px] h-[252px] rounded-full' src={user?.photoURL} alt="" />
            </div>
            <h1 className='text-[64px] font-bold leading-10'>{user?.screenName}</h1>
            <p className='text-[25px] font-medium leading-7'>Paraíba, SP</p>
            <p className='text-[25px] font-medium leading-7'>{user?.email ? user.email : user?.additionalEmail}</p>
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
                href={`https://${user?.providerId}/${user?.screenName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {user?.linkLinkedin && (
                <div className='relative flex w-full'>
                  <a
                    className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-dark_green w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)]'
                    href={user.linkLinkedin}
                  >
                    Linkedin
                  </a>
                  <div className='absolute -right-1 -top-1'>
                    <ButtonEdit />
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>

        <div className='flex flex-col gap-16 max-w-[1240px] w-full p-16 text-secondary_text bg-card_color rounded-[20px]'>
          <p className='text-[64px] font-bold leading-none'>Minha história</p>
          {user?.historyPersonal ? (
            <p className='text-2xl font-bold leading-none text-tertiary_text'>{user.historyPersonal}</p>
          ) : (
            <p className='text-2xl font-bold leading-none text-tertiary_text'>Não há nenhuma história para contar!</p>
          )}
        </div>

        
        <div className='flex flex-col items-center gap-16 w-full bg-secondary_color text-secondary_text p-16'>
          <p className='text-[64px] font-bold leading-none'>Experiências</p>
          {user?.experiences && user?.experiences?.length > 0 ? (
            <div className='flex flex-row flex-wrap gap-11 max-w-[865px] w-full'>
              {user.experiences.map((experience) => (
                <Card
                  key={experience.id}
                  title={experience.title}
                  period={experience.period}
                  skills={experience.skills}
                  experience={experience.experiences}
                  linkRepository={experience.linkRepository || ""}
                />
              ))}
              <CardAdd />
            </div>
          ) : (
            <p className='text-[40px] font-normal leading-none text-tertiary_text'>Não há nada por aqui!</p>
          )}
        </div>

        <div className='flex flex-col gap-16'>
          <p className='text-[42px] text-center leading-none font-bold text-dark_green max-w-[1240px]'>Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>
          <div className='flex justify-center gap-[7px] mt-5'>
            {user?.linkInstagram && (
              <SocialMedia />
            )}
            {user?.linkFacebook && (
              <SocialMedia />
            )}
            {user?.linkTwitter && (
              <SocialMedia />
            )}
            {user?.linkYouTube && (
              <SocialMedia />
            )}
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
