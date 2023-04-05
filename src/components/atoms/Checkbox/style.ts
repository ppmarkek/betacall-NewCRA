import { Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledCheckbox = styled(Grid)`
    width: 20px;
    height: 20px;
    label {
        background-color: #F0F0F3;
        border: 6px solid #F0F0F3;
        border-radius: 50%;
        cursor: pointer;
        height: 20px;
        position: absolute;
        width: 20px;
    }

    input[type="checkbox"] {
        visibility: hidden;
        position: absolute;
    }

    input[type="checkbox"]:checked + label {
        border-color: #6B59CC;
        background-color: #fff;
    }
`;

export const CheckboxGrid = styled(Grid)`
    gap: 10px;
`;