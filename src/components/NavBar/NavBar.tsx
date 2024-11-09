import { useEffect, useState } from 'react'
import ButtonLogoff from './ButtonLogoff'
import ButtonLogin from './ButtonLogin';
import { FaPen } from 'react-icons/fa6';
import { useCreateLoginUser } from '../../context/useCreateLoginUser';
import { useNavigate, useParams } from 'react-router-dom';


export default function NavBar() {

  const [viewLogoff, setViewLogoof] = useState<boolean>(true)

  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const user = useCreateLoginUser();


  function setLogoff(logoof: boolean){
    if(logoof){
      setViewLogoof(false)
      user.logoffUserByUid(Number(id))
      navigate("/")
    }
    else{
      setViewLogoof(true)
    }
  }

  useEffect(() => {
    if(!user.getUserByUid(Number(id))?.token){
      setViewLogoof(false);
    }else{
      setViewLogoof(true);
    }
  }, [user.getUserByUid(Number(id))?.token])

  return (
    <nav className='fixed flex flex-col gap-8 top-0 left-0 right-0 z-10'>
      <div className='relative flex bg-dark_green py-9 font-medium text-3xl text-secondary_text justify-center rounded-b-[35.6px]'>
        <ul className='flex gap-16'>
          <li>Início</li>
          <li>Minha História</li>
          <li>Experiências</li>
          <li>Contato</li>
        </ul>
        <div className='absolute right-8 top-4'>
          {viewLogoff ? (
            <ButtonLogoff onLogoffButton={setLogoff} urlImage={user.getUserByUid(Number(id))?.avatar_url || ""} />
            ) : (
            <ButtonLogin />
          )}
        </div>
      </div>
      {user.getUserByUid(Number(id))?.token && (
        <div className='self-end mr-16 w-[105px] h-[105px] bg-card_color rounded-full p-7'>
          <FaPen className='text-secondary_text w-full h-full' />
          {/* <FaCheck className='text-secondary_text w-full h-full' /> */}
        </div>
      )}
    </nav>
  )
}
