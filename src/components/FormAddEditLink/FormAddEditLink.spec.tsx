import { fireEvent, render, screen } from '@testing-library/react'
import FormAddEditLink from './FormAddEditLink'
import { FormAddEditProps } from '../../types/EditType'
import { SocialNetwork } from '../../types/EnumSocialNetwork'

describe('<FormAddEditLink />', () => {

  const onEditingMock = jest.fn()
  const setSocialNetworkMock = jest.fn() as jest.Mock<(linkUrl: string, socialNetwork: SocialNetwork) => void>;

  const defaultProps: FormAddEditProps = {
    onEditing: onEditingMock,
    linkUrl: '',
    socialNetwork: SocialNetwork.FACEBOOK,
    setSocialNetwork: setSocialNetworkMock,
  }

  beforeEach(() => {
    onEditingMock.mockClear()
    setSocialNetworkMock.mockClear()
  })

  it('should render the form with the correct initial value', () => {
    render(<FormAddEditLink {...defaultProps} />)

    const input = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('')
  })

  it('should update the input value when the user types', () => {
    render(<FormAddEditLink {...defaultProps} />)

    const input = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'https://new-url.com' } })

    expect(input.value).toBe('https://new-url.com')
  })

  it('should call onEditing(false) when clicking the Cancel button', () => {
    render(<FormAddEditLink {...defaultProps} />)

    const cancelButton = screen.getByRole('button', { name: 'Cancelar' })

    fireEvent.click(cancelButton)

    expect(onEditingMock).toHaveBeenCalledWith(false)
    expect(onEditingMock).toHaveBeenCalledTimes(1)
  })

  it('should call setSocialNetwork with the correct arguments when clicking the Save button', () => {
    render(<FormAddEditLink {...defaultProps} />)

    const saveButton = screen.getByRole('button', { name: 'Salvar' })
    const input = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'https://new-url.com' } })

    fireEvent.click(saveButton)

    expect(setSocialNetworkMock).toHaveBeenCalledWith('https://new-url.com', SocialNetwork.FACEBOOK)
    expect(setSocialNetworkMock).toHaveBeenCalledTimes(1)
  })

})