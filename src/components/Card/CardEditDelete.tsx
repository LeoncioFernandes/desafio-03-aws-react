import { TbTrashFilled } from "react-icons/tb";
import { PiPencilSimpleLineFill } from "react-icons/pi";

type CardEditDeleteProps = {
  idCard: number,
  title: string,
  period: string,
  skills: string,
  experiences: string,
  linkRepository: string
  onEditing: (onEdit: boolean, idCard: number, title: string, period: string, skills: string, experiences: string, linkRepository: string) => void;
  onDeleting: (idCard: number) => void
}

export default function CardEditDelete({idCard, title, period, skills, experiences, linkRepository, onEditing, onDeleting}: CardEditDeleteProps) {

  function onClick(){
    onEditing(true, idCard, title, period, skills, experiences, linkRepository)
  }

  function onDelete(){
    onDeleting(idCard)
  }

  return (
    <div className='flex flex-col justify-between h-full w-full text-primary_color border-[3px] border-dark_green bg-card_color drop-shadow-[6px_8px_0px_rgba(9,188,138,1)] rounded-[20px] overflow-hidden'>
      <button
        onClick={onClick}
        className='flex justify-center items-center h-full bg-[#38646F]'
      >
        <PiPencilSimpleLineFill className="w-24 h-24" />
      </button>
      <button
        onClick={onDelete}
        className='flex justify-center items-center h-full bg-[#795C5C]'
      >
        <TbTrashFilled className="w-24 h-24" />
      </button>
    </div>
  )
}
