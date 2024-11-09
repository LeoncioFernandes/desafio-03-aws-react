import { TbTrashFilled } from "react-icons/tb";
import { PiPencilSimpleLineFill } from "react-icons/pi";

export default function CardEditDelete() {
  return (
    <div className='flex flex-col justify-between h-full w-full text-primary_color border-[3px] border-dark_green bg-card_color drop-shadow-[6px_8px_0px_rgba(9,188,138,1)] rounded-[20px] overflow-hidden'>
      <button
        className='flex justify-center items-center h-full bg-[#38646F]'
      >
        <PiPencilSimpleLineFill className="w-24 h-24" />
      </button>
      <button
        className='flex justify-center items-center h-full bg-[#795C5C]'
      >
        <TbTrashFilled className="w-24 h-24" />
      </button>
    </div>
  )
}
