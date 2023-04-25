import { Bold, H1, H2, H3, H4, H5, Light, Regular } from './style';

enum Variant {
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'BOLD',
  'REGULAR',
  'LIGHT',
}

type Value = {
  variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'BOLD' | 'REGULAR' | 'LIGHT' | Variant
  small?: string
  children?: string
  color?: string
}

const Text = ({ variant, small, children, color }: Value) => {
    switch (variant) {
    case 'H1':
        return <H1 $color={color}>{children}</H1>;
    case 'H2':
        return <H2 $color={color}>{children}</H2>;
    case 'H3':
        return <H3 $color={color}>{children}</H3>;
    case 'H4':
        return <H4 $color={color}>{children}</H4>;
    case 'H5':
        return <H5 $color={color}>{children}</H5>;
    case 'BOLD':
        return <Bold $small={small}>{children}</Bold>;
    case 'REGULAR':
        return <Regular $small={small}>{children}</Regular>;
    case 'LIGHT':
        return <Light $small={small}>{children}</Light>;
    default:
        return <Regular $small={small}>{children}</Regular>;
    }
};

export default Text;
