import React from 'react'
import { FaPen } from 'react-icons/fa6'
import { EditingProps } from '../../types/EditType'

export default function ButtonEdit({onEditing, editing, linkSocialMedia = "", socialMedia}: EditingProps) {

  function onClick(){
    onEditing(true, linkSocialMedia, socialMedia)
  }

  return (
    <>
      {editing && (
        <button onClick={onClick} className='w-[25px] h-[25px] bg-card_color rounded-full p-[6.7px]'>
          <FaPen className='text-secondary_text w-full h-full' />
        </button>
      )}
      
    </>
  )
}
