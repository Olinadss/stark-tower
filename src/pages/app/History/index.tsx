import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import type { ILog } from "./interface";
import { Header, Row, TableWrapper } from "./styles";
import { formatDateTime } from "../../../utils/formatDate";

export function History() {
  const [logs, setLogs] = useState<ILog[]>([]);

  async function getLogs() {
    const response = await api.get<ILog[]>("/logs");
    setLogs(response.data);
  }

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <TableWrapper>
      <Header>
        <div>Nome</div>
        <div>CPF</div>
        <div>Entrada</div>
        <div>Saída</div>
      </Header>
      {logs.map((log, index) => (
        <Row key={index}>
          <div>{log.name}</div>
          <div>{log.cpf}</div>
          <div>{formatDateTime(log.entry)}</div>
          <div>{formatDateTime(log.exit)}</div>
        </Row>
      ))}
    </TableWrapper>
  );
}
