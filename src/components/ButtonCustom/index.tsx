import { Button } from "./styles";

type ButtonCustomProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function ButtonCustom({
  variant = "primary",
  ...rest
}: ButtonCustomProps) {
  return <Button variant={variant} {...rest} />;
}
