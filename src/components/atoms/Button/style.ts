import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const FilledRestingLight = styled(Link)`
    text-decoration: none;
    color: #8083A3;
    background: #FFFFFF;
    border: 1px solid #ECEEF5;
    border-radius: 10px;
    text-align: center;
    padding: 13px 0px 15px 0;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    width: ${(props: { $width: any; }) => (props.$width ? props.$width : '98px')};
    transition: all 0.4s;
    &:hover{
        border: 1px solid #6B59CC;
        color: #FFFFFF;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #6B59CC;
        border-radius: 8px;
    }
`;

export const FilledActive = styled(Button)`
    all: unset;
    cursor: pointer;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 19px;
    color: #FFFFFF;
    background: #6B59CC;
    border-radius: 10px;
    border: 1px solid #6B59CC;
    height: 50px;
    transition: all 0.4s;
    text-align: center;
    width: ${(props: { $width: any; }) => (props.$width ? props.$width : '98px')};
    &:hover{
        color: #8083A3;
        background: #fff;
        border: 1px solid #ECEEF5;
    }
`;