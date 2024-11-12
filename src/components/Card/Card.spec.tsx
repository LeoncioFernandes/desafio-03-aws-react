import { fireEvent, render, screen } from '@testing-library/react'
import Card from './Card'

describe('<Card />', () => {

  const editingMock = jest.fn()
  const deletingMock = jest.fn()
  const idCard = 0

  it('should hide CardEditDelete when mouse leaves the card', () => {

    const onEditing = true

    render(
      <Card
        idCard={idCard}
        title=''
        period=''
        skills=''
        experience=''
        linkRepository=''
        onEditing={onEditing}
        editing={editingMock}
        deleting={deletingMock}
      />
    );

    const card = screen.getByTestId('card')
  
    fireEvent.mouseEnter(card);

    const cardEditDeleteVisible = screen.queryByTestId('card-edit-delete')

    expect(cardEditDeleteVisible).toBeInTheDocument();

    fireEvent.mouseLeave(card);

    const cardEditDeleteNOTVisible = screen.queryByTestId('card-edit-delete')

    expect(cardEditDeleteNOTVisible).not.toBeInTheDocument();
  
  });


  it('should render skills correctly separated by commas', () => {
    
    const onEditing = true
    const skills = "skill1, skill2"

    render(
      <Card
        idCard={idCard}
        title=''
        period=''
        skills={skills}
        experience=''
        linkRepository=''
        onEditing={onEditing}
        editing={editingMock}
        deleting={deletingMock}
      />
    )

    const skillElements = screen.getAllByText(/skill1|skill2/);
    expect(skillElements).toHaveLength(2);
  })

  it('should not display the repository link if linkRepository is not provided', () => {
    const onEditing = false

    render(
      <Card
        idCard={idCard}
        title=''
        period=''
        skills=''
        experience=''
        linkRepository=''
        onEditing={onEditing}
        editing={editingMock}
        deleting={deletingMock}
      />
    )
  
    const link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();
  });

})