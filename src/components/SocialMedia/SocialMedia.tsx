import React from 'react'
import ButtonEdit from '../ButtonEdit/ButtonEdit'
import { EditingProps } from '../../types/EditType'

export default function SocialMedia({onEditing, editing, linkSocialMedia, socialMedia, imageSocialMedia}: EditingProps) {
  return (
    <div className='relative flex w-24 h-24'>
      <a
        href={linkSocialMedia}
        className='group w-full h-full bg-primary_text rounded-full p-2.5'
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageSocialMedia} alt={`Rede Social ${imageSocialMedia}`} className='w-full h-full grayscale group-hover:grayscale-0 transition'/>
      </a>
      <div className='absolute right-0 top-0'>
          <ButtonEdit
            onEditing={onEditing}
            editing={editing}
            linkSocialMedia={linkSocialMedia}
            socialMedia={socialMedia}
            imageSocialMedia=''
          />
      </div>
    </div>
  )
}
