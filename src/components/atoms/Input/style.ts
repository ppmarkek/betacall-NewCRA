import styled from 'styled-components';
import { Input, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

type ButtonProps = {
  $width: string
  $color: string
}

export const LightInput = styled(Input)<ButtonProps>`
  width: ${props => (props.$width ? props.$width : '100px')};
  height: 36px;
  &::before {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => (props.$color ? props.$color : '#ECEEF5')};
  }
`;

export const InputGrid = styled(Grid)`
  gap: 8px;
  width: auto;
  flex-direction: column;
  position: relative;
`;

export const ConfirmPassword = styled(Grid)`
  gap: 18px;
  height: 150px;
  width: auto;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 60%;
  right: 0;
  width: 18px;
  height: 18px;
`;

export const SearchGrid = styled(Grid)`
  position: relative;
  width: 570px;
`;

export const SearchButton = styled(Button)`
  all: unset;
  position: absolute;
  z-index: 3;
  right: 0;
  border-radius: 8px;
  border: 1px solid #eceef5;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  span {
    display: none;
  }
  &:hover {
    background-color: #eceef5;
  }
`;

export const SearchInput = styled(Input)`
  position: absolute;
  top: 0;
  background: #eceef5;
  width: 570px;
  height: 42px;
  border-radius: 9px;
  padding-left: 20px;
  padding-right: 42px;
  color: #6b59cc;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  &::after {
    all: unset;
  }
  &::before {
    all: unset;
  }
`;

export const SearchImg = styled.img`
  position: absolute;
`;

export const ResultsGird = styled(Grid)`
  position: absolute;
  justify-content: center;
  gap: 15px;
  top: 50px;
  width: 570px;
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(153, 155, 168, 0.1);
  border-radius: 6px;
  padding: 25px 0;
`;

export const Result = styled(Grid)`
  width: 557px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 0 20px;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
`;

export const ResultLinkGrid = styled(Grid)`
  gap: 5px;
  width: auto;
  justify-content: flex-end;
`;

export const ResultLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: all 0.5s;
  border: 1px solid #eceef5;
  &:hover {
    background-color: #eceef5;
  }
`;

export const ResultImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const Status = styled(Grid)`
  position: absolute;
  bottom: 0px;
  right: -4px;
  background-color: #28c345;
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  border-radius: 20px;
`;
