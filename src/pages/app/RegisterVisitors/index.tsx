import { useNavigate } from "react-router";
import { ButtonCustom } from "../../../components/ButtonCustom";
import { InputCustom } from "../../../components/Input";
import { ContainerButton, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormsSchema, type CreateFormsSchema } from "./schema";
import { api } from "../../../services/api";

export function RegisterVisitors() {
  const navigate = useNavigate();

  function handleChangePage() {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createFormsSchema),
  });

  async function onSubmit(data: CreateFormsSchema) {
    const response = await api.post("/visitors", data);

    if (response.data) {
      handleChangePage();
    }
  }

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Registro de Visitantes</h1>
      <InputCustom
        type="text"
        placeholder="Nome"
        {...register("name")}
        error={errors.name?.message}
      />
      <InputCustom
        type="text"
        placeholder="CPF"
        {...register("cpf")}
        error={errors.cpf?.message}
        maxLength={11}
      />
      <InputCustom
        type="email"
        placeholder="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <InputCustom
        type="date"
        placeholder="Data de Nascimento"
        {...register("birthDate")}
      />
      <ContainerButton>
        <ButtonCustom onClick={handleChangePage} variant="secondary">
          Cancelar
        </ButtonCustom>
        <ButtonCustom type="submit">Cadastrar</ButtonCustom>
      </ContainerButton>
    </ContainerForm>
  );
}
