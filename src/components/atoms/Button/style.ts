import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonProps = {
    width: string;
}

export const FilledRestingLight = styled(Link)<ButtonProps>`
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
    width: ${(props) => (props.width ? props.width : '98px')};
    transition: all 0.4s;
    &:hover{
        border: 1px solid #6B59CC;
        color: #FFFFFF;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #6B59CC;
        border-radius: 8px;
    }
`;