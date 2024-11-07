import React from 'react'
import ButtonEdit from '../ButtonEdit/ButtonEdit'

export default function SocialMedia() {
  return (
    <div className='relative flex w-24 h-24'>
      <a
        href='/'
        className='w-full h-full bg-primary_text rounded-full'
      >
      </a>
      <div className='absolute right-0 top-0'>
          <ButtonEdit />
      </div>
    </div>
  )
}
