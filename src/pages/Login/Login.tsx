import { app } from "../../firebaseConfig";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { FiArrowRight } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTriangleExclamation } from "react-icons/fa6";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {

  const [userName, setUserName] = useState<string>('');
  const [viewMessage, setViewMessage] = useState<boolean>(false);

  function onChangeName(e: ChangeEvent<HTMLInputElement>){
    setUserName(e.target.value)

    if(e.target.value === ""){
      setViewMessage(true);
    }else{
      setViewMessage(false);
    }
  }

  function onSubmit (e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    console.log(userName);
  }

  const gitHubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  function gitHubSignUp(){
    signInWithPopup(auth, gitHubProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='h-svh flex flex-col justify-center items-center gap-6 mx-3'>
      <h1 className='font-bold text-center text-40px'>Digite o nome do usuário que deseja buscar</h1>
      
      <form onSubmit={onSubmit} className='flex flex-col max-w-[788px] w-full gap-1' action="">
        <div className='flex gap-4'>
          <input
            className='py-2 px-4 border border-primary_text rounded-2xl bg-secondary_text text-2xl font-medium leading-10 placeholder:text-tertiary_text placeholder:font-normal grow'
            placeholder='Digite o nome do usuário'
            type="text"
            name="nameUser"
            id="nameUser"
            value={userName}
            onChange={onChangeName}
          />
          <button
            type="submit"
            className='px-5 py-2 border border-primary_text rounded-2xl disabled:bg-tertiary_text bg-secondary_color text-secondary_text'
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
        
      </form>

      <div className='flex items-center max-w-[788px] w-full h-10 px-[9.5px]'>
        <div className='w-full border-t-[5px] border-secondary_color'></div>
        <div className='bg-bg_primary px-[10px] text-primary_text text-2xl font-bold leading-10'>ou</div>
        <div className='w-full border-t-[5px] border-secondary_color'></div>
      </div> 
      

      <div className='flex items-center gap-4'>
        <p className='font-bold text-2xl leading-10'>Acesse sua conta com</p>
        <button
          className='flex items-center gap-[10px] px-6 py-1 font-bold text-base leading-10 text-secondary_text bg-dark_green rounded-3xl'
          onClick={() => gitHubSignUp()}
        >
          <TbBrandGithubFilled className='w-6 h-6' />
          <div>Github</div>
        </button>
      </div>
    </div>
  )
}
