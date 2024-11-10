import React from 'react'
import { RxPlusCircled } from 'react-icons/rx'

type AddCard = {
  onAdding: (onAdd: boolean) => void;
};

export default function CardAdd({onAdding}: AddCard) {
  return (
    <button
      onClick={() => onAdding(true)}
      className='flex flex-col justify-center items-center gap-4 max-w-[409px] w-full h-[503px] px-7 py-8 text-secondary_text border-[3px] border-dark_green bg-card_color drop-shadow-[6px_8px_0px_rgba(9,188,138,1)] rounded-[20px] transition hover:text-primary_color'
    >
      <RxPlusCircled className='w-[108px] h-[108px]' />
      <p className='text-[32px] font-bold leading-10'>Adicionar card</p>
    </button>
  )
}
