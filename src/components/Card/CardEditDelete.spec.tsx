import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardEditDelete from './CardEditDelete'

describe('<CardEditDelete />', () => {

  const onClickMock = jest.fn()
  const onDeleteMock = jest.fn()
  const idCard = 0

  it('should call onClick when the FIRST button is clicked', () => {

    render(
      <CardEditDelete
        idCard={idCard}
        title=''
        period=''
        skills=''
        experiences=''
        linkRepository=''
        onEditing={onClickMock}
        onDeleting={onDeleteMock}
      />
    )

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2)

    userEvent.click(buttons[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).not.toHaveBeenCalled();
    
  })

  it('should call onDelete when the SECOND button is clicked', () => {

    render(
      <CardEditDelete
        idCard={idCard}
        title=''
        period=''
        skills=''
        experiences=''
        linkRepository=''
        onEditing={onClickMock}
        onDeleting={onDeleteMock}
      />
    )

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2)

    userEvent.click(buttons[1]);
    expect(onClickMock).not.toHaveBeenCalled();
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    
  })

})