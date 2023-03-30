import { Typography } from '@mui/material';
import styled from 'styled-components';


type ButtonProps = {
    $small: string;
}

export const H1 = styled(Typography)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    color: #1A1C1D;
`;

export const H2 = styled(Typography)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #1A1C1D;
`;

export const H3 = styled(Typography)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    color: #1A1C1D;
`;

export const H4 = styled(Typography)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    color: #1A1C1D;
`;

export const H5 = styled(Typography)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;
    color: #1A1C1D;
`;

export const Bold = styled(Typography)<ButtonProps>`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => (props.$small ? '16px' : '18px')};
    line-height: 21px;
    color: #1A1C1D;
`;

export const Regular = styled(Typography)<ButtonProps>`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => (props.$small ? '16px' : '18px')};
    line-height: 21px;
    color: #1A1C1D;
`;

export const Light = styled(Typography)<ButtonProps>`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => (props.$small ? '16px' : '18px')};
    line-height: 21px;
    color: #8083A3;
`;