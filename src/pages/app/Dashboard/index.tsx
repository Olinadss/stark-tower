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

const visitantes = [
  { nome: "João Silva", cpf: "123.456.789-00" },
  { nome: "Maria Souza", cpf: "987.654.321-00" },
  { nome: "Pedro Santos", cpf: "111.222.333-44" },
];

export function Dashboard() {
  const navigate = useNavigate();

  function handleChangePage() {
    navigate("/cadastro");
  }

  return (
    <>
      <ContentBanner>
        <ContentWelcome>
          <span>Bem vindo de volta, as Industrias Stark</span>
          <ButtonCustom onClick={handleChangePage}>
            <Plus />
            Criar visitante
          </ButtonCustom>
        </ContentWelcome>
        <ButtonCustom>Histórico</ButtonCustom>
      </ContentBanner>
      <VisitorsList>
        <Header>
          <div>Nome</div>
          <div>CPF</div>
        </Header>

        {visitantes.map((visitor, i) => (
          <Row key={i}>
            <div>{visitor.nome}</div>
            <div>{visitor.cpf}</div>
          </Row>
        ))}
      </VisitorsList>
      <RoomCard visitors={visitantes} />
    </>
  );
}
