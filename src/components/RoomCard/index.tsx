import type { IVisitor } from "../../pages/app/Dashboard/interface";
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

interface RoomCardProps {
  visitors: IVisitor[];
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
      </CardHeader>
      <CardForm>
        <InputCustom placeholder="Nome" />
        <InputCustom placeholder="CPF" />
        <ButtonCustom>Entrar na Sala</ButtonCustom>
      </CardForm>
      <CardContent>
        {visitors.map((visitor) => (
          <CardList key={visitor.id}>
            <div>{visitor.name}</div>
          </CardList>
        ))}
      </CardContent>
    </Card>
  );
}
