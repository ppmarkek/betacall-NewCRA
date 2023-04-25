import { useLocation } from 'react-router-dom';
import { DarkIcon } from '../../../assets/Icon/Dark';
import Button from '../../atoms/Button/Button';
import { Header, StyledLink } from './style';

const LoginHeader = () => {
  const location = useLocation();

  return (
    <Header container>
      <DarkIcon />
      <StyledLink to={location.pathname === '/Login' ? '/Step1' : '/Login'}>
        <Button variant='FilledRestingLight' width='115px'>
          {location.pathname === '/Login' ? 'Sign Up' : 'Sign In'}
        </Button>
      </StyledLink>
    </Header>
  );
};

export default LoginHeader;
