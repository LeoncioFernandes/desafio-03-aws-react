import { IoLogInOutline } from "react-icons/io5";
import { useCreateLoginUser } from '../../context/useCreateLoginUser';
import { useNavigate } from 'react-router-dom';
import { HandleLoginGitHub } from '../../functions/HandleLoginGitHub';

export default function ButtonLogin() {

  const userById = useCreateLoginUser();
  const navigate = useNavigate();

  const onClickToLoginGitHub = async () => {
    const user = await HandleLoginGitHub();

    if(user){
      userById.addUser(user);
      navigate(`/portfolio/${user.id}`)
    }
  } 
  
  return (
    <button
      className='flex items-center gap-[10px] px-5 py-5 transition hover:text-primary_color'
      onClick={onClickToLoginGitHub}
    >
      <IoLogInOutline className='w-9 h-9' />
      <div>Entrar</div>
    </button>
  )
}
