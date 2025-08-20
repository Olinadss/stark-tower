import {
  ActiveCount,
  Card,
  CardButton,
  CardContent,
  CardHeader,
  CardList,
  CardTitle,
} from "./styled";

interface RoomCardProps {
  visitors: {
    nome: string;
    cpf: string;
  }[];
}

export function RoomCard({ visitors }: RoomCardProps) {
  const active = 1;
  const maxActive = 3;
  const displayCount = Math.min(active, maxActive);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mark III</CardTitle>
        <ActiveCount>
          {displayCount}/{maxActive}
        </ActiveCount>
        <CardButton>Entrar na Sala</CardButton>
      </CardHeader>
      <CardContent>
        {visitors.map((visitor, i) => (
          <CardList key={i}>
            <div>{visitor.nome}</div>
          </CardList>
        ))}
      </CardContent>
    </Card>
  );
}
