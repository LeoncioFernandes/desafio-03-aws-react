import NavBar from '../../components/NavBar/NavBar'
import { useParams, useNavigate } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Card from '../../components/Card/Card';
import CardAdd from '../../components/Card/CardAdd';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { useCreateLoginUser } from '../../context/useCreateLoginUser';
import FormAddEditLink from '../../components/FormAddEditLink/FormAddEditLink';
import { SocialNetwork } from '../../types/EnumSocialNetwork';
import FormAddEditCard from '../../components/FormAddEditCard/FormAddEditCard';
import { CardData, FormCardProps } from '../../types/CardTypes';
import { toast } from "react-toastify";
import { FaPen } from 'react-icons/fa6';

export default function Portfolio() {

  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const user = useCreateLoginUser().getUserByUid(Number(id));
  const userEdit = useCreateLoginUser();
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [viewFloatForm, setViewFloatForm] = useState<boolean>(false)
  const [viewFormEditLink, setViewFormEditLink] = useState<boolean>(false)
  const [viewFormCardEdit, setViewFormCardEdit] = useState<boolean>(false)
  const [linkSocialMedia, setLinkSocialMedia] = useState<string>("")
  const [cardData, setCardData] = useState<CardData | undefined>()
  const [socialMedia, setSocialMedia] = useState<SocialNetwork>()

  function onEditing(onEdit: boolean, linkSocialMedia: string, socialMedia: SocialNetwork){
    setViewFloatForm(onEdit)
    setViewFormEditLink(onEdit)
    setLinkSocialMedia(linkSocialMedia)
    setSocialMedia(socialMedia)
  }

  function setEdit(onEdit: boolean){
    setIsEdit(onEdit)
  }

  function closeFloatLink(close: boolean){
    setViewFormEditLink(close)
    setViewFloatForm(close)
  }

  function closeFloatCard(close: boolean){
    setCardData(undefined)
    setViewFloatForm(close)
    setViewFormCardEdit(close)
  }

  function closeAllFloats(close: boolean){
    setCardData(undefined)
    setViewFormEditLink(close)
    setViewFormCardEdit(close)
    setViewFloatForm(close)
  }

  function onChangeNamePersonal(e: ChangeEvent<HTMLInputElement>){
    userEdit.changeNamePersonal(Number(id), e.target.value)
  }

  function onChangeAdditionalEmail(e: ChangeEvent<HTMLInputElement>){
    userEdit.changeAdditionalEmail(Number(id), e.target.value)
  }

  function onChangeHistoryPersonal(e: ChangeEvent<HTMLTextAreaElement>){
    userEdit.changeHistoryPersonal(Number(id), e.target.value)
  }

  function onChangeLinkSocialNetwork(linkSocialNetwork: string, socialNetwork: SocialNetwork){
    if(socialNetwork === SocialNetwork.LINKEDIN){
      userEdit.changeLinkLinkedin(Number(id), linkSocialNetwork)
    }
    if(socialNetwork === SocialNetwork.INSTAGRAM){
      userEdit.changeLinkInstagram(Number(id), linkSocialNetwork)
    }
    if(socialNetwork === SocialNetwork.TWITTER){
      userEdit.changeLinkTwitter(Number(id), linkSocialNetwork)
    }
    if(socialNetwork === SocialNetwork.FACEBOOK){
      userEdit.changeLinkFacebook(Number(id), linkSocialNetwork)
    }
    if(socialNetwork === SocialNetwork.YOUTUBE){
      userEdit.changeLinkYouTube(Number(id), linkSocialNetwork)
    }

    setViewFloatForm(false)
    setViewFormEditLink(false)
  }

  function onAddCard(onAdd: boolean){
    setViewFloatForm(onAdd)
    setViewFormCardEdit(onAdd)
  }

  function onEditCard(onEdit: boolean, cardData: CardData){

    setCardData(cardData)

    setViewFloatForm(onEdit)
    setViewFormCardEdit(onEdit)
  }

  function onAddNewCardOrEditCard(formCardProps: FormCardProps, idCard: number | undefined){

    const {title, period, skills, experiences, linkRepository} = formCardProps

    if(!idCard){
      userEdit.addCard(Number(id), title, period, skills, experiences, linkRepository!)
    }else{
      userEdit.editCard(Number(id), idCard, title, period, skills, experiences, linkRepository!)
    }

    setCardData(undefined)
    setViewFloatForm(false)
    setViewFormCardEdit(false)
  }

  function onDeleteCard(idCard: number){

    userEdit.deleteCard(Number(id), idCard)

    setCardData(undefined)
    setViewFloatForm(false)
    setViewFormCardEdit(false)
  }

  function handleInputHistoryPersonal(){
    const textArea = textAreaRef.current;
    if(textArea){
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight + 10}px`;
    }
  }

  useEffect(() => {
    handleInputHistoryPersonal();

    if(isEdit){
      toast.success("Modo de Edição", {
        position: "bottom-center",
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
        draggable: false,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        style: {
          background: '#172A3A', 
          color: '#FFFFFF',
          boxShadow: "5px 5px 0px rgba(9, 188, 138, 1)",
          justifyContent: "center",
          gap: "10px",
          fontSize: "20px",
          fontWeight: "700",
          fontFamily: "Roboto"
        },
        icon: (
          <div className='bg-primary_color p-1.5 rounded-full'>
            <FaPen className='text-white' size={18}/>
          </div>
        )
      });
    }else{
      toast.dismiss();
    }

  },[isEdit])
  
  useEffect(() => {
    if(!id){
      return navigate("/");
    }
    if(!user){
      return navigate("/");
    }
  }, [id])
  
  return (
    <div>
      <NavBar onEditing={setEdit} />
      <div className='flex flex-col gap-32 items-center mt-[236px]'>

        <section id='home' className='flex justify-between items-center max-w-[1240px] w-full'>
          <div className='flex flex-col items-center gap-4'>
            <div className='relative flex items-center justify-center'>
              <div className='w-64 h-64 bg-primary_color rounded-full border-2 border-dark_green drop-shadow-[4px_00px_0px_rgba(23,42,58,1)] overflow-hidden'></div>
              <img className='absolute w-[252px] h-[252px] rounded-full' src={user?.avatar_url} alt="" />
            </div>
            <h1 className='text-[64px] font-bold leading-10'>{user?.login}</h1>
            <p className='text-[25px] font-medium leading-7'>{user?.location}</p>
            <p className='text-[25px] font-medium leading-7'>{user?.email ? user.email : user?.additionalEmail}</p>
          </div>
          <div className='flex flex-col gap-8 max-w-[500px] w-full'>
            <div className='flex flex-col text-[64px] font-bold leading-[50px] gap-6'>
              <p>Hello,</p>
              <div className='relative flex gap-3 items-center'>
                <p>I'm</p>
                {isEdit ? (
                  <input
                    className='absolute left-24 text-primary_color border-b-[3px] bg-transparent border-primary_text w-[calc(100%-6rem)] focus:outline-none'
                    type="text"
                    value={user?.namePersonal}
                    onChange={onChangeNamePersonal}
                  />
                ): (
                  <div className=' truncate'>
                    <span className='text-primary_color text-nowrap'>{user?.namePersonal}</span>
                    {user?.bio ? "," : "."}
                  </div>
                  
                )}
              </div>
            </div>
            <p className='text-[25px] font-medium leading-8 max-w-[445px]'>
              {user?.bio}
            </p>
            <div className='flex gap-7'>
              <a
                className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-none max-w-[194px] w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)] transition hover:bg-primary_color'
                href={user?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {(user?.linkLinkedin || isEdit) && (
                <div className='relative flex w-full'>
                  {user?.linkLinkedin ? (
                    <a
                      className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-none w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)] transition hover:bg-primary_color'
                      href={user.linkLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  ) : (
                    <p
                      className='text-[32px] text-bg_primary font-bold leading-[37.5px] bg-dark_green border border-none w-full text-center py-3 rounded-2xl drop-shadow-[8px_8px_0px_rgba(9,188,138,1)] transition hover:bg-primary_color'
                    >
                      Linkedin
                    </p>
                  )}
                  
                  <div className='absolute -right-1 -top-1'>
                    <ButtonEdit
                      onEditing={onEditing}
                      editing={isEdit}
                      linkSocialMedia={user?.linkLinkedin}
                      socialMedia={SocialNetwork.LINKEDIN}
                      imageSocialMedia=''
                    />
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </section>

        <section id='my-history' className='flex flex-col gap-16 max-w-[1240px] w-full p-16 text-secondary_text bg-card_color rounded-[20px]'>
          <p className='text-[64px] font-bold leading-none'>Minha história</p>
          {(user?.historyPersonal && !isEdit) ? (
            <textarea
              ref={textAreaRef}
              className={`text-2xl font-bold leading-8 bg-transparent resize-none ${user.historyPersonal ? "text-secondary_text" : "text-tertiary_text"}`}
              value={user?.historyPersonal}
              disabled={true}
            />
          ) : (
            <div>
              {isEdit ? (
                <textarea
                  ref={textAreaRef}
                  onInput={handleInputHistoryPersonal}
                  className='bg-transparent text-2xl font-bold leading-8 text-tertiary_text border-b-[3px] focus:outline-none w-full resize-none'
                  value={user?.historyPersonal}
                  onChange={onChangeHistoryPersonal}
                />
              ) : (
                <p className='text-2xl font-bold leading-none text-tertiary_text'>Não há nenhuma história para contar!</p>
              )}
            </div>
          )}
        </section>

        <section id='experiences' className={`flex flex-col items-center w-full text-secondary_text`}>
          <div className='flex flex-col items-center gap-16 w-full bg-secondary_color py-16'>
            <p className='text-[64px] font-bold leading-none'>Experiências</p>
            {((user?.experiences && user?.experiences?.length > 0) || isEdit) ? (
              <div className='flex flex-row flex-wrap gap-11 max-w-[865px] w-full'>
                {user?.experiences?.map((experience) => (
                  <Card
                    key={experience.id}
                    idCard={experience.id}
                    title={experience.title}
                    period={experience.period}
                    skills={experience.skills}
                    experience={experience.experiences}
                    linkRepository={experience.linkRepository || ""}
                    onEditing={isEdit}
                    editing={onEditCard}
                    deleting={onDeleteCard}
                  />
                ))}
                {isEdit && (
                  <CardAdd onAdding={onAddCard} />
                )}
              </div>
            ) : (
              <p className='text-[40px] font-normal leading-none text-tertiary_text'>Não há nada por aqui!</p>
            )}
          </div>
          
          {(user?.additionalEmail || isEdit) && (
            <div className='flex flex-col items-center gap-16 bg-dark_green px-16 py-32 w-full'>
              <p className='text-[42px] leading-10 font-bold'>Sinta-se livre para me contatar a qualquer momento!</p>
              {isEdit ? (
                <input
                  className='bg-transparent text-center border-b-[3px] text-[64px] font-bold focus:outline-none w-full'
                  type="text"
                  value={user?.additionalEmail}
                  onChange={onChangeAdditionalEmail}
                />
              ) : (
                <p className='text-[64px] leading-8 font-bold'>{user?.additionalEmail}</p>
              )}
            </div>
          )}
          
        </section>

        <section id='contact' className='flex flex-col gap-16'>
          <p className='text-[42px] text-center leading-none font-bold text-dark_green max-w-[1240px]'>Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>
          <div className='flex justify-center gap-[7px] mt-5'>
            {(user?.linkInstagram || isEdit) && (
              <SocialMedia
                onEditing={onEditing}
                editing={isEdit}
                linkSocialMedia={user?.linkInstagram}
                socialMedia={SocialNetwork.INSTAGRAM}
                imageSocialMedia='/images/instagram.png'
              />
            )}
            {(user?.linkFacebook || isEdit) && (
              <SocialMedia
                onEditing={onEditing}
                editing={isEdit}
                linkSocialMedia={user?.linkFacebook}
                socialMedia={SocialNetwork.FACEBOOK}
                imageSocialMedia='/images/facebook.png'
              />
            )}
            {(user?.linkTwitter || isEdit) && (
              <SocialMedia
                onEditing={onEditing}
                editing={isEdit}
                linkSocialMedia={user?.linkTwitter}
                socialMedia={SocialNetwork.TWITTER}
                imageSocialMedia='/images/twitter.png'
              />
            )}
            {(user?.linkYouTube || isEdit) && (
              <SocialMedia
                onEditing={onEditing}
                editing={isEdit}
                linkSocialMedia={user?.linkYouTube}
                socialMedia={SocialNetwork.YOUTUBE}
                imageSocialMedia='/images/youtube.png'
              />
            )}
          </div>
          <div className='flex gap-[84.5px] justify-center mb-[69px] text-dark_green text-[25px] font-medium'>
            <div className='flex items-center gap-3'>
              <MdPlace className='h-[35px] w-[35px]' />
              <p>Brasil</p>
            </div>
            <p>© 2024, All Rights By Compass UOL</p>
          </div>
        </section>

      </div>

      {viewFloatForm && (
        <div className='fixed flex justify-center items-center top-0 h-svh w-full bg-[#6D6D6D]/80 z-10'>
          <div onClick={() => closeAllFloats(false)} className='fixed top-0 h-full w-full' />

          {viewFormEditLink && (
            <FormAddEditLink
              onEditing={closeFloatLink}
              setSocialNetwork={onChangeLinkSocialNetwork}
              linkUrl={linkSocialMedia}
              socialNetwork={socialMedia!}
            />
          )}

          {viewFormCardEdit && (
            <FormAddEditCard
              onEditing={closeFloatCard}
              onAddCard={onAddNewCardOrEditCard}
              cardData={cardData}
            />
          )}
        
        </div>
      )}

    </div>
  )
}
