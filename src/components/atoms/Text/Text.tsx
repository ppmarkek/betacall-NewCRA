import { Bold, H1, H2, H3, H4, H5, Light, Regular } from './style';

type Value = {
    variant: string;
    small: string;
    text: string;
};

const Text = ({variant, small, text}: Value) => {
    switch (variant) {
    case 'H1':
        return (
            <H1>{text}</H1>
        );
    case 'H2':
        return (
            <H2>{text}</H2>
        );
    case 'H3':
        return (
            <H3>{text}</H3>
        );
    case 'H4':
        return (
            <H4>{text}</H4>
        );
    case 'H5':
        return (
            <H5>{text}</H5>
        );
    case 'Bold':
        return (
            <Bold $small={small}>{text}</Bold>
        );
    case 'Regular':
        return (
            <Regular $small={small}>{text}</Regular>
        );
    case 'Light':
        return (
            <Light $small={small}>{text}</Light>
        );
    default:
        return (
            <Regular $small={small}>{text}</Regular>
        );
    }
};

export default Text;