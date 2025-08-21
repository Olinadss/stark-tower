import { useState } from "react";
import { Button } from "../../components/ButtonCustom/styles";
import { ContainerForm, Input, LoginCard, LoginWrapper, Title } from "./styles";
import { useNavigate } from "react-router";
import { login } from "../../utils/login";

export function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) return;

    const user = await login(name.trim());

    if (user) {
      navigate("/");
    }
  }

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>Login</Title>
        <ContainerForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit" disabled={!name.trim()}>
            Entrar
          </Button>
        </ContainerForm>
      </LoginCard>
    </LoginWrapper>
  );
}
