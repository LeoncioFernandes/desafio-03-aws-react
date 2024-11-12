import { render, screen, fireEvent } from '@testing-library/react';
import ButtonLogoff from './ButtonLogoff';

describe('<ButtonLogoff />', () => {
  const fn = jest.fn();

  it('should render the button with text "Sair"', () => {
    render(
    <ButtonLogoff 
      onLogoffButton={fn}
      urlImage="" 
      />
    );

    expect(screen.getByText('Sair')).toBeInTheDocument();
  });

  it('should display the user image with the provided URL', () => {
    
    const imageUrl = "test-image-url.jpg";

    render(
      <ButtonLogoff
        onLogoffButton={fn}
        urlImage={imageUrl}
      />
    );

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', imageUrl);
    expect(img).toHaveAttribute('alt', 'UserImage');
  });

  it('should call onLogoffButton with true when clicked', () => {
    render(
      <ButtonLogoff
        onLogoffButton={fn}
        urlImage="test-image-url.jpg"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(true);
  });
})