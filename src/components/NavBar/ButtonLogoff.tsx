
type LogoffButton = {
  onLogoffButton: (isLogoff: boolean) => void;
  urlImage: string
};

export default function ButtonLogoff({onLogoffButton, urlImage}: LogoffButton) {

  function Logoff(){
    onLogoffButton(true);
  }

  return (
    <button className='flex items-center gap-4 transition hover:text-primary_color' onClick={() => Logoff()}>
      <div>Sair</div>
      <div className='w-[77px] h-[77px] bg-primary_color rounded-full overflow-hidden'>
        <img className="" src={urlImage} alt="UserImage" />
      </div>
    </button>
  )
}
