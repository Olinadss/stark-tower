import { zodResolver } from "@hookform/resolvers/zod";
import type { IVisitor } from "../../pages/app/Dashboard/interface";
import {
  createFormsRoomSchema,
  type CreateFormsRoomSchema,
} from "../../pages/app/Dashboard/schema";
import { ButtonCustom } from "../ButtonCustom";
import { InputCustom } from "../Input";
import {
  ActiveCount,
  Card,
  CardContent,
  CardForm,
  CardHeader,
  CardList,
  CardTitle,
} from "./styled";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { registerEntry, registerExit } from "../../utils/registerLogs";

interface RoomCardProps {
  visitors: IVisitor[];
}

export function RoomCard({ visitors }: RoomCardProps) {
  const [activeVisitors, setActiveVisitors] = useState<IVisitor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createFormsRoomSchema),
  });

  const active = activeVisitors.length;
  const maxActive = 3;
  const displayCount = Math.min(active, maxActive);

  const disableButton = active >= maxActive;

  const navigate = useNavigate();

  function handleChangePage() {
    navigate("/");
  }

  async function onSubmit(data: CreateFormsRoomSchema) {
    try {
      const visitor = visitors.find((v) => v.cpf === data.cpf);

      if (!visitor) {
        toast.error("CPF não encontrado na lista de visitantes!");
        return;
      }

      if (visitor.name !== data.name) {
        toast.error("Nome não corresponde ao CPF informado!");
        return;
      }

      const response = await api.post("/rooms", data);

      getActiveVisitors();

      await registerEntry(visitor.name, visitor.cpf);

      if (response.data) {
        toast.success("Visitante adicionado à sala com sucesso!");
        handleChangePage();
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao adicionar visitante na sala!");
    }
  }

  async function getActiveVisitors() {
    try {
      const response = await api.get<IVisitor[]>("/rooms");
      setActiveVisitors(response.data);
    } catch (error) {
      console.error("Erro ao buscar visitantes", error);
    } finally {
      setLoading(false);
    }
  }

  function handleDeleteVisitor(id: string) {
    api
      .delete(`/rooms/${id}`)
      .then(() => {
        setActiveVisitors((prev) =>
          prev.filter((visitor) => visitor.id !== id)
        );
        toast.success("Visitante removido da sala com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao remover visitante", error);
        toast.error("Erro ao remover visitante da sala!");
      });
  }

  function handleExitRoom(visitor: IVisitor) {
    handleDeleteVisitor(visitor.id);
    registerExit(visitor.cpf);
  }

  useEffect(() => {
    getActiveVisitors();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mark III</CardTitle>
        <ActiveCount>
          {displayCount}/{maxActive}
        </ActiveCount>
      </CardHeader>
      <CardForm onSubmit={handleSubmit(onSubmit)}>
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
        <ButtonCustom type="submit" disabled={disableButton}>
          Entrar na Sala
        </ButtonCustom>
      </CardForm>
      <CardContent>
        {loading ? (
          <div>Carregando visitantes...</div>
        ) : (
          activeVisitors.map((visitor) => (
            <CardList key={visitor.id}>
              <div>{visitor.name}</div>
              <ButtonCustom
                onClick={() => handleExitRoom(visitor)}
                variant="danger"
              >
                Sair
              </ButtonCustom>
            </CardList>
          ))
        )}
      </CardContent>
    </Card>
  );
}
