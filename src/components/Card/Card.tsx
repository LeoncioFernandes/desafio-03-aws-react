import { useState } from "react"
import CardEditDelete from "./CardEditDelete"


type CardProps = {
  title: string,
  period: string,
  skills: string,
  experience: string,
  linkRepository?: string
}

export default function Card({title, period, skills, experience, linkRepository}:
  CardProps) {

  const [showEditDelete, setShowEditDelete] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setShowEditDelete(true)}
      onMouseLeave={() => setShowEditDelete(false)}
      className='max-w-[409px] w-full h-[503px]'
    >
      {showEditDelete ? (
        <CardEditDelete />
      ) : (
        <div className='flex flex-col gap-4 justify-between w-full h-full px-7 py-8 text-secondary_text border-[3px] border-dark_green bg-card_color drop-shadow-[6px_8px_0px_rgba(9,188,138,1)] rounded-[20px]'>
          <div className='flex flex-col gap-4 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-secondary_text scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
            <h1 className='text-[32px] font-bold leading-10'>{title}</h1>
            <p className='text-[20px] text-tertiary_text leading-7'>{period}</p>
            <div className='flex gap-[10px]'>
              {skills!.split(',').map((skill) => (
                <div className='bg-dark_green p-2 rounded text-xs'>
                  {skill}
                </div>
              ))}
            </div>
            <p className='text-2xl'>{experience}</p>
          </div>
          {linkRepository && (
            <a
              href={linkRepository}
              className='bg-dark_green text-center text-2xl p-3 rounded-md'
            >
              Ver repositório
            </a>
          )}
          
        </div>
      )}
    </div>
  )
}
