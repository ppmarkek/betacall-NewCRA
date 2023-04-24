import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LeftNovigation = styled(Grid)`
  min-height: 900px;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 22px 0px;
`;

export const ButtonsGrid = styled(Grid)`
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: all 0.5s;
  border: 1px solid #fff;
  &:hover {
    border-color: #eceef5;
  }
`;

export const StyledImg = styled.img`
  width: 22px;
  height: 22px;
`;
