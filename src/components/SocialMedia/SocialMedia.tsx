import React from 'react'
import ButtonEdit from '../ButtonEdit/ButtonEdit'
import { EditingProps } from '../../types/EditType'

export default function SocialMedia({onEditing, editing, linkSocialMedia, socialMedia}: EditingProps) {
  return (
    <div className='relative flex w-24 h-24'>
      <a
        href={linkSocialMedia}
        className='w-full h-full bg-primary_text rounded-full'
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      <div className='absolute right-0 top-0'>
          <ButtonEdit
            onEditing={onEditing}
            editing={editing}
            linkSocialMedia={linkSocialMedia}
            socialMedia={socialMedia}
          />
      </div>
    </div>
  )
}
