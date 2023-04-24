import { Grid } from '@mui/material';
import { ButtonsGrid, LeftNovigation, StyledImg, StyledLink } from './style';
import Logo from '../../../assets/Icon/Logo.svg';
import { Link } from 'react-router-dom';
import Home from '../../../assets/NovigationIcon/Home.svg';
import Messenger from '../../../assets/NovigationIcon/Messenger.svg';
import Calls from '../../../assets/NovigationIcon/Calls.svg';
import Conference from '../../../assets/NovigationIcon/Conference.svg';
import Contacts from '../../../assets/NovigationIcon/Contacts.svg';
import Screenshare from '../../../assets/NovigationIcon/Screenshare.svg';
import Schedule from '../../../assets/NovigationIcon/Schedule.svg';
import Settings from '../../../assets/NovigationIcon/Settings.svg';

const Novigation = () => {
    const Button = [
        {
            Icon: Home,
            Link: '/Home',
        },
        {
            Icon: Messenger,
            Link: '/Messenger',
        },
        {
            Icon: Calls,
            Link: '/Calls',
        },
        {
            Icon: Conference,
            Link: '/Conference',
        },
        {
            Icon: Contacts,
            Link: '/Contacts',
        },
        {
            Icon: Screenshare,
            Link: '/Screenshare',
        },
        {
            Icon: Schedule,
            Link: '/Schedule',
        },
        {
            Icon: Settings,
            Link: '/Settings',
        },
    ];

    return (
        <Grid height={'100%'}>
            <LeftNovigation container xs={1}>
                <Grid height={'5%'}>
                    <Link to='/'>
                        <img src={Logo} alt='Logo' />
                    </Link>
                </Grid>
                <ButtonsGrid container>
                    {Button.map((x: any) => (
                        <StyledLink key={x.Icon} to={x.Link}>
                            <StyledImg src={x.Icon} alt='Icon' />
                        </StyledLink>
                    ))}
                </ButtonsGrid>
            </LeftNovigation>
        </Grid>
    );
};

export default Novigation;
