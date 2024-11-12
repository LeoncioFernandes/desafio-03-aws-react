import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonEdit from './ButtonEdit'
import { SocialNetwork } from '../../types/EnumSocialNetwork'

describe('<ButtonEdit />', () => {

  const fn = jest.fn()

  it('should render a button', () => {

    const onEdit = true

    render(
      <ButtonEdit
        onEditing={fn}
        editing={onEdit}
        linkSocialMedia=''
        socialMedia={SocialNetwork.FACEBOOK}
        imageSocialMedia=''
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
    
  })

  it('should NOT render a button', () => {

    const onEdit = false

    render(
      <ButtonEdit
        onEditing={fn}
        editing={onEdit}
        linkSocialMedia=''
        socialMedia={SocialNetwork.FACEBOOK}
        imageSocialMedia=''
      />
    )

    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument();
    
  })

  it('should call function on button click', () => {
    
    const onEdit = true

    const onEditingMock = jest.fn() as jest.Mock<(onEdit: boolean, linkSocialMedia: string, socialMedia: SocialNetwork) => void>;

    render(
      <ButtonEdit
        onEditing={onEditingMock}
        editing={onEdit}
        linkSocialMedia=''
        socialMedia={SocialNetwork.FACEBOOK}
        imageSocialMedia=''
      />
    )

    const button = screen.getByRole('button')

    userEvent.click(button)
    
    expect(onEditingMock).toHaveBeenCalledWith(true, "", SocialNetwork.FACEBOOK)
    expect(onEditingMock).toHaveBeenCalledTimes(1)
  })

  it('should render the correct icon', () => {

    const onEdit = true

    render(
      <ButtonEdit
        onEditing={fn}
        editing={onEdit}
        linkSocialMedia=''
        socialMedia={SocialNetwork.FACEBOOK}
        imageSocialMedia=''
      />
    )
    
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument();
  });

})