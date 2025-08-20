import { ContainerInput, Input } from "./styles";

type InputCustomProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function InputCustom({ error, ...rest }: InputCustomProps) {
  return (
    <ContainerInput>
      <Input hasError={!!error} {...rest} />
      {error && (
        <span style={{ color: "red", fontSize: "0.8rem" }}>{error}</span>
      )}
    </ContainerInput>
  );
}
