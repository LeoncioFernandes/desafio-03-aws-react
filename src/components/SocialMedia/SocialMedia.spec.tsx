import { render, screen, fireEvent } from '@testing-library/react';
import SocialMedia from './SocialMedia';
import { EditingProps } from '../../types/EditType';
import { SocialNetwork } from '../../types/EnumSocialNetwork';

describe('<SocialMedia />', () => {

  const mockOnEditing = jest.fn();

  const defaultProps: EditingProps = {
    onEditing: mockOnEditing,
    editing: true,
    linkSocialMedia: '',
    socialMedia: SocialNetwork.FACEBOOK,
    imageSocialMedia: 'test-image-url.jpg',
  };

  it('should render the social media link with the correct URL', () => {
    render(<SocialMedia {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should display the social media image with the correct src and alt attributes', () => {
    render(<SocialMedia {...defaultProps} />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test-image-url.jpg');
    expect(img).toHaveAttribute('alt', 'Rede Social test-image-url.jpg');
  });

  it('should render the ButtonEdit component when editing is true', () => {
    render(<SocialMedia {...defaultProps} />);
    
    const buttonEdit = screen.getByRole('button');
    expect(buttonEdit).toBeInTheDocument();
  });

  it('should not render the ButtonEdit component when editing is false', () => {
    render(<SocialMedia {...defaultProps} editing={false} />);
    
    const buttonEdit = screen.queryByRole('button');
    expect(buttonEdit).not.toBeInTheDocument();
  });

  it('should call onEditing function when ButtonEdit is clicked', () => {
    render(<SocialMedia {...defaultProps} />);
    
    const buttonEdit = screen.getByRole('button');
    fireEvent.click(buttonEdit);

    expect(mockOnEditing).toHaveBeenCalledWith(true, '', SocialNetwork.FACEBOOK);
    expect(mockOnEditing).toHaveBeenCalledTimes(1);
  });

})