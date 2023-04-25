import Text from '../Text/Text';
import { useState, useEffect } from 'react';
import {
    ConfirmPassword,
    InputGrid,
    LightInput,
    Result,
    ResultImg,
    ResultLink,
    ResultLinkGrid,
    ResultsGird,
    SearchButton,
    SearchGrid,
    SearchImg,
    SearchInput,
    SearchLink,
    Status,
    StyledImg,
} from './style';
import { Fade, Grid } from '@mui/material';
import SilverPass from '../../../assets/Icon/SilverPass.svg';
import Pass from '../../../assets/Icon/Pass.svg';
import Email from '../../../assets/Icon/Email.svg';
import EmailSilver from '../../../assets/Icon/EmailSilver.svg';
import Men from '../../../assets/Icon/Men.svg';
import MenSilver from '../../../assets/Icon/MenSilver.svg';
import CheckSilver from '../../../assets/Icon/CheckSilver.svg';
import Check from '../../../assets/Icon/Check.svg';
import SearchSilver from '../../../assets/Icon/SearchSilver.svg';
import Search from '../../../assets/Icon/Search.svg';
import Avatar from '../../../assets/Image/Avatar.svg';
import Messenger from '../../../assets/NavigationIcon/Messenger.svg';
import Calls from '../../../assets/NavigationIcon/Calls.svg';

type Value = {
  variant: string
  type?: string
  text?: string
  width?: string
  color?: string
  title?: string
  IconType?: string
}

const Input = ({ variant, type, text, width, color, title, IconType }: Value) => {
    const [Icon, setIcon] = useState(SilverPass);
    const [Confirm, setConfirm] = useState(CheckSilver);
    const [Value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    const ChangeSearch = () => {
        return checked === false ? setChecked(true) : setChecked(false);
    };

    const changeIcon = () => {
        if (IconType === 'Email') {
            return setIcon(EmailSilver);
        } else if (IconType === 'Name') {
            return setIcon(MenSilver);
        }
    };

    const CheackIcon = (x: string) => {
        if (IconType === 'Email') {
            return x === '' ? setIcon(EmailSilver) : setIcon(Email);
        }
        if (IconType === 'Pass' && variant === 'ConfirmPassword') {
            setValue(x);
            return x === '' ? setIcon(SilverPass) : setIcon(Pass);
        }
        if (IconType === 'Pass') {
            return x === '' ? setIcon(SilverPass) : setIcon(Pass);
        }
        if (IconType === 'Name') {
            return x === '' ? setIcon(MenSilver) : setIcon(Men);
        }
    };

    const CheackConfirmPass = (x: string) => {
        return Value !== '' && Value === x ? setConfirm(Check) : setConfirm(CheckSilver);
    };

    useEffect(() => {
        changeIcon();
    }, []);

    switch (variant) {
    case 'LightInput':
        return (
            <InputGrid container>
                <Text variant={'LIGHT'} small={'small'}>
                    {title}
                </Text>
                <LightInput
                    type={type}
                    placeholder={text}
                    $width={width}
                    $color={color}
                    onChange={x => CheackIcon(x.target.value)}
                />
                {IconType !== '' ? <StyledImg src={Icon} alt='' /> : <Grid></Grid>}
            </InputGrid>
        );
    case 'ConfirmPassword':
        return (
            <ConfirmPassword container>
                <InputGrid container>
                    <Text variant={'LIGHT'} small={'small'}>
              Password
                    </Text>
                    <LightInput
                        type={'password'}
                        placeholder={'Enter your password'}
                        $width={width}
                        $color={color}
                        onChange={x => CheackIcon(x.target.value)}
                    />
                    <StyledImg src={Icon} alt='' />
                </InputGrid>
                <InputGrid container>
                    <Text variant={'LIGHT'} small={'small'}>
              Confirm password
                    </Text>
                    <LightInput
                        type={'password'}
                        placeholder={'Confirm your password'}
                        $width={width}
                        $color={color}
                        onChange={x => CheackConfirmPass(x.target.value)}
                    />
                    <StyledImg src={Confirm} alt='' />
                </InputGrid>
            </ConfirmPassword>
        );
    case 'Search':
        return (
            <SearchGrid>
                <Grid>
                    <SearchButton onClick={() => ChangeSearch()}>
                        <Fade in={checked}>
                            <SearchImg src={Search} alt='SearchSilver' />
                        </Fade>
                        <Fade in={!checked}>
                            <SearchImg src={SearchSilver} alt='SearchSilver' />
                        </Fade>
                    </SearchButton>
                    <Fade in={checked}>
                        <SearchInput />
                    </Fade>
                </Grid>
                <Fade in={checked}>
                    <ResultsGird container>
                        <Result container>
                            <SearchLink to='/'>
                                <Grid container gap={'20px'}>
                                    <Grid position={'relative'}>
                                        <img src={Avatar} alt='' />
                                        <Status />
                                    </Grid>
                                    <Grid>
                                        <Text variant={'BOLD'}>John Doe</Text>
                                        <Text variant={'LIGHT'} small={'small'}>
                        Developer
                                        </Text>
                                    </Grid>
                                </Grid>
                            </SearchLink>
                            <ResultLinkGrid container>
                                <ResultLink to='/'>
                                    <ResultImg src={Messenger} alt='icon' />
                                </ResultLink>
                                <ResultLink to='/'>
                                    <ResultImg src={Calls} alt='icon' />
                                </ResultLink>
                                <ResultLink to='/'>
                                    <ResultImg src={Messenger} alt='icon' />
                                </ResultLink>
                            </ResultLinkGrid>
                        </Result>
                    </ResultsGird>
                </Fade>
            </SearchGrid>
        );
    default:
        return <LightInput placeholder={text} $width={width} $color={color} />;
    }
};

export default Input;
