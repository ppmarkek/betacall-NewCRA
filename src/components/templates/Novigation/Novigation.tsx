import { Grid, Menu, MenuItem } from '@mui/material';
import {
    AvatarButton,
    BorderGrid,
    ButtonsGrid,
    ChangeButton,
    LeftNovigation,
    NovigButton,
    StyledImg,
    StyledLink,
    TopNovigation,
    Wrapper,
} from './style';
import Logo from '../../../assets/Icon/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../../assets/NovigationIcon/Home.svg';
import Messenger from '../../../assets/NovigationIcon/Messenger.svg';
import Calls from '../../../assets/NovigationIcon/Calls.svg';
import Conference from '../../../assets/NovigationIcon/Conference.svg';
import Contacts from '../../../assets/NovigationIcon/Contacts.svg';
import Screenshare from '../../../assets/NovigationIcon/Screenshare.svg';
import Schedule from '../../../assets/NovigationIcon/Schedule.svg';
import Settings from '../../../assets/NovigationIcon/Settings.svg';
import HomeActive from '../../../assets/NovigationIcon/HomeActive.svg';
import MessengerActive from '../../../assets/NovigationIcon/MessengerActive.svg';
import CallsActive from '../../../assets/NovigationIcon/CallsActive.svg';
import ConferenceActive from '../../../assets/NovigationIcon/ConferenceActive.svg';
import ContactsActive from '../../../assets/NovigationIcon/ContactsActive.svg';
import ScreenshareActive from '../../../assets/NovigationIcon/ScreenshareActive.svg';
import ScheduleActive from '../../../assets/NovigationIcon/ScheduleActive.svg';
import SettingsActive from '../../../assets/NovigationIcon/SettingsActive.svg';
import Avatar from '../../../assets/Image/Avatar.svg';
import Text from '../../atoms/Text/Text';
import { MouseEvent, useState } from 'react';
import Input from '../../atoms/Input/Input';

const Novigation = () => {
    const location = useLocation();
    const [checkClass, SetCheckClass] = useState('NotActive');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const ChangeClass = () => {
        return checkClass === 'Active' ? SetCheckClass('NotActive') : SetCheckClass('Active');
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
            <TopNovigation container xs={11.5}>
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
                    <Text variant={'H3'} small={''} color={''}>
                        {location.pathname.replace('/', '')}
                    </Text>
                </Grid>
                <Grid container xs={6} gap={'10px'} justifyContent={'flex-end'}>
                    <Input
                        variant={'Search'}
                        type={''}
                        text={'Search'}
                        width={''}
                        color={''}
                        title={''}
                        IconType={''}
                    />
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
            </TopNovigation>
            <LeftNovigation container xs={0.5}>
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
            </LeftNovigation>
        </Wrapper>
    );
};

export default Novigation;
