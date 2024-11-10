export type FormCardProps = {
  title: string,
  period: string,
  skills: string,
  experiences: string,
  linkRepository?: string | undefined,
}

export type CardData = {
  idCard: number,
  title: string,
  period: string,
  skills: string,
  experiences: string,
  linkRepository: string
}

export type CardEditDeleteProps = {
  idCard: number,
  title: string,
  period: string,
  skills: string,
  experiences: string,
  linkRepository: string
  onEditing: (onEdit: boolean, cardData: CardData) => void;
  onDeleting: (idCard: number) => void
}

export type CardProps = {
  idCard: number,
  title: string,
  period: string,
  skills: string,
  experience: string,
  linkRepository?: string,
  onEditing: boolean
  editing: (onEdit: boolean, cardData: CardData) => void
  deleting: (idCard: number) => void
}

export type AddCardProps = {
  onEditing: (onEdit: boolean) => void;
  onAddCard: (formCardProps: FormCardProps, idCard: number | undefined) => void;
  cardData: CardData | undefined
};