import { Plus } from "lucide-react";
import {
  ContentBanner,
  ContentWelcome,
  Header,
  VisitorsList,
  Row,
} from "./styles";
import { RoomCard } from "../../../components/RoomCard";
import { useNavigate } from "react-router";
import { ButtonCustom } from "../../../components/ButtonCustom";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import type { IVisitor } from "./interface";

export function Dashboard() {
  const navigate = useNavigate();

  const [visitors, setVisitors] = useState<IVisitor[]>([]);
  const [loading, setLoading] = useState(true);

  function handleChangePage(route: string) {
    navigate(route);
  }

  async function getVisitors() {
    try {
      const response = await api.get<IVisitor[]>("/visitors");
      setVisitors(response.data);
    } catch (error) {
      console.error("Erro ao buscar visitantes", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVisitors();
  }, []);

  return (
    <>
      <ContentBanner>
        <ContentWelcome>
          <span>Bem vindo de volta, as Industrias Stark</span>
          <ButtonCustom onClick={() => handleChangePage("/cadastro")}>
            <Plus />
            Criar visitante
          </ButtonCustom>
        </ContentWelcome>
        <ButtonCustom onClick={() => handleChangePage("/historico")}>
          Histórico
        </ButtonCustom>
      </ContentBanner>
      <VisitorsList>
        <Header>
          <div>Nome</div>
          <div>CPF</div>
        </Header>

        {loading ? (
          <div>Carregando visitantes...</div>
        ) : (
          visitors.map((visitor) => (
            <Row key={visitor.id}>
              <div>{visitor.name}</div>
              <div>{visitor.cpf}</div>
            </Row>
          ))
        )}
      </VisitorsList>
      <RoomCard visitors={visitors} />
    </>
  );
}
