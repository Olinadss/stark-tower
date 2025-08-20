import { Input } from "./styles";

type InputCustomProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputCustom({ ...rest }: InputCustomProps) {
  return <Input {...rest} />;
}
