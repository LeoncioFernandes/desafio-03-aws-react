import React from 'react'
import { FaPen } from 'react-icons/fa6'

export default function ButtonEdit() {
  return (
    <button className='w-[25px] h-[25px] bg-card_color rounded-full p-[6.7px]'>
      <FaPen className='text-secondary_text w-full h-full' />
    </button>
  )
}
