import styled from 'styled-components';
import { Input, Grid } from '@mui/material';

type ButtonProps = {
    $width: string;
    $color: string;
}


export const LightInput = styled(Input)<ButtonProps>`
    width: ${(props) => (props.$width ? props.$width : '100px')};
    height: 36px;
    &::before {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${(props) => (props.$color ? props.$color : '#ECEEF5')};
    }
`;

export const InputGrid = styled(Grid)`
    gap: 8px;
    width: unset;
    flex-direction: column;
`;