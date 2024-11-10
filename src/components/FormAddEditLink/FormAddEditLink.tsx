import { ChangeEvent, useState } from "react";
import { FormAddEditProps } from "../../types/EditType";

export default function FormAddEditLink({onEditing, linkUrl, socialNetwork, setSocialNetwork}: FormAddEditProps){

    const [linkSocialNetwork, setLinkSocialNetwork] = useState<string>(linkUrl || "")

    function onChangeLinkSocialNetwork (e: ChangeEvent<HTMLInputElement>) {
        setLinkSocialNetwork(e.target.value);
    }

    return(
        <div className='fixed flex flex-col bg-bg_primary p-16 gap-8 rounded-[26px] z-10'>
            <p className='text-dark_green text-[48px] font-bold'>Adicionar link</p>
            <input
                onChange={onChangeLinkSocialNetwork}
                value={linkSocialNetwork}
                className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                type="text"
                placeholder='Digite a URL'
            />
            <div className='flex gap-6'>
                <button
                    onClick={() => onEditing(false)}
                    className='w-[357.5px] text-dark_green text-[32px] font-medium border-2 border-dark_green rounded-md p-3 transition hover:bg-red_custom hover:text-secondary_text'
                >
                    Cancelar
                </button>
                <button
                    onClick={() => setSocialNetwork(linkSocialNetwork, socialNetwork)}
                    className='w-[357.5px] text-secondary_text text-[32px] font-medium bg-dark_green rounded-md p-3 transition hover:bg-primary_color'
                >
                    Salvar
                </button>
            </div>
        </div>
    )
}