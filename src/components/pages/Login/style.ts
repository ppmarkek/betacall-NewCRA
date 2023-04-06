import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignIn = styled(Grid)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 91px;
`;

export const Title = styled(Grid)`
    width: 390px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    gap: 11px;
    padding-bottom: 64px;
    padding-top: 97px;
`;

export const StyledLink = styled(Link)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 19px;
    color: #6B59CC;
    text-decoration: none;
`;

export const OrGrid = styled(Grid)`
    align-items: center;
    padding: 47px 0px;
    gap: 16px;
    width: unset;
`;

export const SocialLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 420px;
    height: 50px;
    border: 1px solid #ECEEF5;
    border-radius: 10px;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #8083A3;
`;

export const IconGrid = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 48px;
    border-right: 1px solid #EEEEEE;
`;

export const HoverGrid = styled(Grid)`
    padding-top: 14px;
    padding-left: 16px;
    height: 100%;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #8083A3;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.4s;
    &:hover {
        color: #FFFFFF;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #6B59CC;
    }
`;