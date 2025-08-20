import { useNavigate } from "react-router";
import { ButtonCustom } from "../../../components/ButtonCustom";
import { InputCustom } from "../../../components/Input";
import { ContainerButton, ContainerForm } from "./styles";

export function RegisterVisitors() {
  const navigate = useNavigate();

  function handleChangePage() {
    navigate("/");
  }

  return (
    <ContainerForm>
      <h1>Registro de Visitantes</h1>
      <InputCustom type="text" placeholder="Nome" />
      <InputCustom type="text" placeholder="CPF" />
      <InputCustom type="email" placeholder="Email" />
      <InputCustom type="date" placeholder="Data de Nascimento" />
      <ContainerButton>
        <ButtonCustom onClick={handleChangePage} variant="secondary">
          Cancelar
        </ButtonCustom>
        <ButtonCustom>Cadastrar</ButtonCustom>
      </ContainerButton>
    </ContainerForm>
  );
}
