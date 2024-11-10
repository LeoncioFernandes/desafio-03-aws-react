import { FiArrowRight } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useCreateLoginUser } from "../../context/useCreateLoginUser";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/UserTypes";
import { HandleLoginGitHub } from "../../functions/HandleLoginGitHub";

export default function Login() {

  const [userName, setUserName] = useState<string>('');
  const [user, setUser] = useState<User>();
  const [viewMessage, setViewMessage] = useState<boolean>(false);
  const [viewSearchBox, setViewSearchBox] = useState<boolean>(false);
  const users = useCreateLoginUser().findUsers(userName);
  const userById = useCreateLoginUser();
  const navigate = useNavigate();

  const onClickToLoginGitHub = async () => {
    const user = await HandleLoginGitHub();

    if(user){
      userById.addUser(user);
      navigate(`/portfolio/${user.id}`)
    }
  } 
  
  function onChangeName(e: ChangeEvent<HTMLInputElement>){
    setUserName(e.target.value)
    setViewSearchBox(true);

    if(users?.length === 0){
      setViewMessage(true);
    }else{
      setViewMessage(false);
    }
  }

  function onClickSearchedUser(name: string, id: number){
    setUser(userById.getUserByUid(id));
    setUserName(name);
    setViewSearchBox(false);
  }

  useEffect(() => {
    if(!userName){
      setViewMessage(false);
    }
  }, [userName])

  useEffect(() => {
    userById.logoffAllUsers()
  }, [])

  function onSubmit (e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    navigate(`/portfolio/${user?.id}`)
  }
  
  return (
    <div className='h-svh flex flex-col justify-center items-center gap-6 mx-3'>
      <h1 className='font-bold text-center text-40px'>Digite o nome do usuário que deseja buscar</h1>
      
      <form onSubmit={onSubmit} className='relative flex flex-col max-w-[788px] w-full gap-1'>
        <div className='flex gap-4'>
          <input
            className='py-2 px-4 border border-primary_text rounded-2xl bg-secondary_text text-2xl font-medium leading-10 placeholder:text-tertiary_text placeholder:font-normal grow'
            placeholder='Digite o nome do usuário'
            type="text"
            autoComplete="off"
            name="nameUser"
            id="nameUser"
            value={userName}
            onChange={onChangeName}
          />
          <button
            type="submit"
            className='px-5 py-2 border border-primary_text rounded-2xl disabled:bg-tertiary_text bg-secondary_color text-secondary_text transition hover:bg-primary_color'
            disabled={userName ? false : true}
          >
            <FiArrowRight className='h-9 w-9' />
          </button>
        </div>
        
        {viewMessage && (
          <div className='h-10 flex gap-2 items-center font-medium text-red_custom'>
          <FaTriangleExclamation className='w-6 h-6' />
          <p>O nome que você digitou não existe ou não está cadastrado!</p>
        </div>
        )}


        {(viewSearchBox && users && users?.length !== 0) && (
          <div className="absolute top-[70px] w-full flex gap-4 text-[#C9CACC] drop-shadow-[6px_6px_8px_rgba(0,0,0,0.17)]">
            <div className="flex flex-col max-h-[198px] w-full border border-[#D6D6D6] bg-secondary_text p-3 rounded-md overflow-y-auto">
              {users.map((user) => (
                <div
                  className="flex items-center gap-2.5 border-b py-1 border-[#C9CACC] text-base leading-10 font-medium cursor-pointer"
                  onClick={() => onClickSearchedUser(user.name!, user.id!)}
                >
                  <BiSolidUser className="w-6 h-6" />
                  {user.name}
                </div>
              ))}
              
            </div>
            <div className="min-w-[78px]"/>
          </div>
        )}
        
      </form>

      <div className='flex items-center max-w-[788px] w-full h-10 px-[9.5px]'>
        <div className='w-full border-t-[5px] border-secondary_color'></div>
        <div className='bg-bg_primary px-[10px] text-primary_text text-2xl font-bold leading-10'>ou</div>
        <div className='w-full border-t-[5px] border-secondary_color'></div>
      </div> 
      

      <div className='flex items-center gap-4'>
        <p className='font-bold text-2xl leading-10'>Acesse sua conta com</p>
        <button
          className='flex items-center gap-[10px] px-6 py-1 font-bold text-base leading-10 text-secondary_text bg-dark_green rounded-3xl transition hover:bg-primary_color'
          onClick={onClickToLoginGitHub}
        >
          <TbBrandGithubFilled className='w-6 h-6' />
          <div>Github</div>
        </button>
      </div>
    </div>
  )
}
