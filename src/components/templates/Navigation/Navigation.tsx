import { Grid, Menu, MenuItem } from '@mui/material';
import {
    AvatarButton,
    BorderGrid,
    ButtonsGrid,
    ChangeButton,
    LeftNavigation,
    NovigButton,
    StyledImg,
    StyledLink,
    TopNavigation,
    Wrapper,
} from './style';
import Logo from '../../../assets/Icon/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../../assets/NavigationIcon/Home.svg';
import Messenger from '../../../assets/NavigationIcon/Messenger.svg';
import Calls from '../../../assets/NavigationIcon/Calls.svg';
import Conference from '../../../assets/NavigationIcon/Conference.svg';
import Contacts from '../../../assets/NavigationIcon/Contacts.svg';
import Screenshare from '../../../assets/NavigationIcon/Screenshare.svg';
import Schedule from '../../../assets/NavigationIcon/Schedule.svg';
import Settings from '../../../assets/NavigationIcon/Settings.svg';
import HomeActive from '../../../assets/NavigationIcon/HomeActive.svg';
import MessengerActive from '../../../assets/NavigationIcon/MessengerActive.svg';
import CallsActive from '../../../assets/NavigationIcon/CallsActive.svg';
import ConferenceActive from '../../../assets/NavigationIcon/ConferenceActive.svg';
import ContactsActive from '../../../assets/NavigationIcon/ContactsActive.svg';
import ScreenshareActive from '../../../assets/NavigationIcon/ScreenshareActive.svg';
import ScheduleActive from '../../../assets/NavigationIcon/ScheduleActive.svg';
import SettingsActive from '../../../assets/NavigationIcon/SettingsActive.svg';
import Avatar from '../../../assets/Image/Avatar.svg';
import Text from '../../atoms/Text/Text';
import { MouseEvent, useState } from 'react';
import Input from '../../atoms/Input/Input';

const Navigation = () => {
    const location = useLocation();
    const [checkClass, setCheckClass] = useState('NotActive');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const ChangeClass = () => {
        return checkClass === 'Active' ? setCheckClass('NotActive') : setCheckClass('Active');
    };

    const ButtonLink = [
        {
            Icon: location.pathname === '/Home' ? HomeActive : Home,
            Link: '/Home',
        },
        {
            Icon: location.pathname === '/Messenger' ? MessengerActive : Messenger,
            Link: '/Messenger',
        },
        {
            Icon: location.pathname === '/Calls' ? CallsActive : Calls,
            Link: '/Calls',
        },
        {
            Icon: location.pathname === '/Conference' ? ConferenceActive : Conference,
            Link: '/Conference',
        },
        {
            Icon: location.pathname === '/Contacts' ? ContactsActive : Contacts,
            Link: '/Contacts',
        },
        {
            Icon: location.pathname === '/Screenshare' ? ScreenshareActive : Screenshare,
            Link: '/Screenshare',
        },
        {
            Icon: location.pathname === '/Schedule' ? ScheduleActive : Schedule,
            Link: '/Schedule',
        },
        {
            Icon: location.pathname === '/Settings' ? SettingsActive : Settings,
            Link: '/Settings',
        },
    ];

    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Wrapper container>
            <TopNavigation container xs={11.5}>
                <Grid container xs={6} gap={'15px'} alignItems={'center'}>
                    <ChangeButton>
                        <NovigButton className={checkClass} onClick={() => ChangeClass()}>
                            <BorderGrid container>
                                <label id={'Top'}></label>
                                <label id={'Middle'}></label>
                                <label id={'Bottom'}></label>
                            </BorderGrid>
                        </NovigButton>
                    </ChangeButton>
                    <Text variant={'H3'}>{location.pathname.replace('/', '')}</Text>
                </Grid>
                <Grid container xs={6} gap={'10px'} justifyContent={'flex-end'}>
                    <Input variant={'Search'} text={'Search'} />
                    <AvatarButton onClick={handleClick}>
                        <img src={Avatar} alt='avatar' />
                    </AvatarButton>
                    <Menu
                        anchorEl={anchorEl}
                        id='account-menu'
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
            </TopNavigation>
            <LeftNavigation container xs={0.5}>
                <Grid height={'5%'}>
                    <Link to='/'>
                        <img src={Logo} alt='Logo' />
                    </Link>
                </Grid>
                <ButtonsGrid container>
                    {ButtonLink.map((x: any) => (
                        <StyledLink key={x.Icon} to={x.Link}>
                            <StyledImg src={x.Icon} alt='Icon' />
                        </StyledLink>
                    ))}
                </ButtonsGrid>
            </LeftNavigation>
        </Wrapper>
    );
};

export default Navigation;
