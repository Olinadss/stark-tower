import { Plus } from "lucide-react";
import {
  ButtonCustom,
  ContentBanner,
  ContentWelcome,
  Header,
  VisitorsList,
  Row,
} from "./styles";
import { RoomCard } from "../../../components/RoomCard";

const visitantes = [
  { nome: "João Silva", cpf: "123.456.789-00" },
  { nome: "Maria Souza", cpf: "987.654.321-00" },
  { nome: "Pedro Santos", cpf: "111.222.333-44" },
];

export function Dashboard() {
  return (
    <>
      <ContentBanner>
        <ContentWelcome>
          <span>Bem vindo de volta, as Industrias Stark</span>
          <ButtonCustom>
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

        {visitantes.map((v, i) => (
          <Row key={i}>
            <div>{v.nome}</div>
            <div>{v.cpf}</div>
          </Row>
        ))}
      </VisitorsList>
      <RoomCard visitors={visitantes} />
    </>
  );
}
