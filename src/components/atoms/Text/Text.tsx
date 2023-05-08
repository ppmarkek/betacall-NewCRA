import { Bold, H1, H2, H3, H4, H5, Light, Regular } from "./style";

enum Variant {
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "BOLD",
  "REGULAR",
  "LIGHT",
}

type TextProps = {
  variant: "H1" | "H2" | "H3" | "H4" | "H5" | "BOLD" | "REGULAR" | "LIGHT" | Variant
  small?: boolean
  children?: string
  color?: string
}

const Text = ({ variant, small, children, color }: TextProps) => {
  switch (variant) {
    case Variant[Variant.H1]:
      return <H1 $color={color}>{children}</H1>;
    case Variant[Variant.H2]:
      return <H2 $color={color}>{children}</H2>;
    case Variant[Variant.H3]:
      return <H3 $color={color}>{children}</H3>;
    case Variant[Variant.H4]:
      return <H4 $color={color}>{children}</H4>;
    case Variant[Variant.H5]:
      return <H5 $color={color}>{children}</H5>;
    case Variant[Variant.BOLD]:
      return (
        <Bold $small={small} $color={color}>
          {children}
        </Bold>
      );
    case Variant[Variant.REGULAR]:
      return <Regular $small={small}>{children}</Regular>;
    case Variant[Variant.LIGHT]:
      return <Light $small={small}>{children}</Light>;
    default:
      return <Regular $small={small}>{children}</Regular>;
  }
};

export default Text;
