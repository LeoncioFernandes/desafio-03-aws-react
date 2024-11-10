import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    title: z.string().min(3, { message: "Título obrigatório" }),
    period: z.string().min(3, { message: "Período obrigatório" }),
    skills: z.string().min(3, { message: "Habilidades obrigatórias" }),
    experiences: z.string().min(3, { message: "Expericências obrigatórias" }),
    linkRepository: z.string().optional(),
  })

type FormCardProps = z.infer<typeof schema>;

type CardData = {
    idCard: number,
    title: string,
    period: string,
    skills: string,
    experiences: string,
    linkRepository: string
}

type AddCardProps = {
    onEditing: (onEdit: boolean) => void;
    onAddCard: (formCardProps: FormCardProps, idCard: number | undefined) => void;
    cardData: CardData | undefined
};

export default function FormAddEditCard({onAddCard, onEditing, cardData}: AddCardProps){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormCardProps>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: cardData?.title || "",
            period: cardData?.period || "",
            skills: cardData?.skills || "",
            experiences: cardData?.experiences || "",
            linkRepository: cardData?.linkRepository || "",
        },
    });

    const onSubmit = (data: FormCardProps) => {
        
        onAddCard(data, cardData?.idCard)
    }

    return(
        <div className='flex flex-col bg-bg_primary p-16 gap-8 rounded-[26px] z-10'>
            <p className='text-dark_green text-[48px] font-bold'>{cardData ? "Edição de card" : "Criação de card"}</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
            >
                <div className="flex flex-col">
                    <input
                        className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                        type="text"
                        placeholder='Título'
                        {...register("title")}
                    />
                    {errors.title && (
                        <span className="text-sm text-red_custom">
                            {errors.title.message?.toString()}
                        </span>
                    )}
                </div>
                <div className="flex flex-col">
                    <input
                        className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                        type="text"
                        placeholder='Período de atuação'
                        {...register("period")}
                    />
                    {errors.period && (
                        <span className="text-sm text-red_custom">
                            {errors.period.message?.toString()}
                        </span>
                    )}
                </div>
                <div className="flex flex-col">
                    <input
                        className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                        type="text"
                        placeholder='Habilidades (Separe-as por vírgula)'
                        {...register("skills")}
                    />
                    {errors.skills && (
                        <span className="text-sm text-red_custom">
                            {errors.skills.message?.toString()}
                        </span>
                    )}
                </div>
                <div className="flex flex-col">
                    <textarea
                        className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                        placeholder='Descreva a sua experiência'
                        {...register("experiences")}
                    />
                    {errors.experiences && (
                        <span className="text-sm text-red_custom">
                            {errors.experiences.message?.toString()}
                        </span>
                    )}
                </div>
                <input
                    className='border border-dark_green rounded-lg px-3 py-4 text-2xl bg-transparent placeholder:text-tertiary_text placeholder:text-2xl'
                    type="text"
                    placeholder='Link do repositório (Opcional)'
                    {...register("linkRepository")}
                />

                <div className='flex gap-6'>
                    <button
                        type="submit"
                        onClick={() => onEditing(false)}
                        className='w-[357.5px] text-dark_green text-[32px] font-medium border-2 border-dark_green rounded-md p-3'
                    >
                        Cancelar
                    </button>
                    <button className='w-[357.5px] text-secondary_text text-[32px] font-medium bg-dark_green rounded-md p-3'>Salvar</button>
                </div>
            
            </form>
            
        </div>
    )
}