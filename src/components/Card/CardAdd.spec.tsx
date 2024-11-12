import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardAdd from "./CardAdd"

describe('<CardAdd />', () => {

  it('should call function on button click', () => {

    const fn = jest.fn()

    render(<CardAdd onAdding={fn} />)

    const button = screen.getByRole('button')

    userEvent.click(button)
    
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(true);
    expect(fn).not.toHaveBeenCalledWith(false);
  })

})