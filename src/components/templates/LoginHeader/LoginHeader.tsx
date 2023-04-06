import { DarkIcon } from '../../../assets/Icon/Dark';
import Button from '../../atoms/Button/Button';
import { Header, StyledLink } from './style';

const LoginHeader = () => {
    return (
        <Header container>
            <DarkIcon />
            <StyledLink to={'/Login'}>
                <Button variant='FilledRestingLight'width='116px'>Sign In</Button>
            </StyledLink>

        </Header>
    );
};

export default LoginHeader;
