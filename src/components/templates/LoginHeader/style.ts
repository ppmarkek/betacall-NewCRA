import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled(Grid)`
  justify-content: space-between;
  align-items: center;
  padding: 0 270px;
  height: 85px;
  border: 1px solid #eeeeee;
`;

export const StyledLink = styled(Link)`
  width: auto;
  height: auto;
  text-decoration: none;
`;
