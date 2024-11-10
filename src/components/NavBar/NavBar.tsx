import { useEffect, useState, MouseEvent } from 'react'
import ButtonLogoff from './ButtonLogoff'
import ButtonLogin from './ButtonLogin';
import { FaCheck, FaPen } from 'react-icons/fa6';
import { useCreateLoginUser } from '../../context/useCreateLoginUser';
import { useNavigate, useParams } from 'react-router-dom';

type EditingProps = {
  onEditing: (onEdit: boolean) => void;
};


export default function NavBar({onEditing}: EditingProps) {

  const [viewLogoff, setViewLogoof] = useState<boolean>(true)
  const [isEdit, setIsEdit] = useState<boolean>(false)

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

  function scrolling(e: MouseEvent<HTMLButtonElement>, section: string){
    e.preventDefault();
    
    const sectionElement = document.getElementById(section)

    if(sectionElement){
      const offsetTop = sectionElement.getBoundingClientRect().top + window.scrollY - 140;
        
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
    }
  }

  function isEditing() {
    if(isEdit){
      setIsEdit(false)
      onEditing(false)
    }else{
      setIsEdit(true)
      onEditing(true)
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
          <li>
            <button
              onClick={(e) => scrolling(e, 'home')}
              className='transition hover:text-primary_color'
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={(e) => scrolling(e, 'my-history')}
              className='transition hover:text-primary_color'
            >
              Minha História
            </button>
          </li>
          <li>
            <button
              onClick={(e) => scrolling(e, 'experiences')}
              className='transition hover:text-primary_color'
            >
              Experiências
            </button>
          </li>
          <li>
            <button
              onClick={(e) => scrolling(e, 'contact')}
              className='transition hover:text-primary_color'
            >
              Contato
            </button>
          </li>
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
        <button onClick={isEditing} className='self-end mr-16 w-[105px] h-[105px] bg-card_color rounded-full p-7 transition hover:bg-primary_color'>
          {isEdit ? (
            <FaCheck className='text-secondary_text w-full h-full' />
          ) : (
            <FaPen className='text-secondary_text w-full h-full' />
          )}
        </button>
      )}
    </nav>
  )
}
