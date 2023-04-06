import { Bold, H1, H2, H3, H4, H5, Light, Regular } from './style';

type Value = {
    variant: string;
    small: string;
    children: string;
    light: string;
};

const Text = ({variant, small, children, light}: Value) => {
    switch (variant) {
    case 'H1':
        return (
            <H1 $light={light}>{children}</H1>
        );
    case 'H2':
        return (
            <H2 $light={light}>{children}</H2>
        );
    case 'H3':
        return (
            <H3 $light={light}>{children}</H3>
        );
    case 'H4':
        return (
            <H4 $light={light}>{children}</H4>
        );
    case 'H5':
        return (
            <H5 $light={light}>{children}</H5>
        );
    case 'Bold':
        return (
            <Bold $small={small}>{children}</Bold>
        );
    case 'Regular':
        return (
            <Regular $small={small}>{children}</Regular>
        );
    case 'Light':
        return (
            <Light $small={small}>{children}</Light>
        );
    default:
        return (
            <Regular $small={small}>{children}</Regular>
        );
    }
};

export default Text;