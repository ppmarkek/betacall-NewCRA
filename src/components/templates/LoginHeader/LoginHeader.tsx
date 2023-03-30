import { DarkIcon } from '../../../assets/Icon/Dark';
import Button from '../../atoms/Button/Button';
import { Header } from './style';


const LoginHeader = () => {
    return (
        <Header container>
            <DarkIcon />
            <Button variant='FilledRestingLight' text='Sign Up' width='116px'/>
        </Header>
    );
};

export default LoginHeader;