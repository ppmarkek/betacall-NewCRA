import styled from 'styled-components';
import { Input, Grid } from '@mui/material';

type InputStyleProps = {
  $width?: string
  $color?: string
}

export const LightInput = styled(Input)<InputStyleProps>`
  width: ${props => props.$width || '100px'};
  height: 36px;
  &::before {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.$color || '#ECEEF5'};
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
