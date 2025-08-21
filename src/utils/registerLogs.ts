import type { ILog } from "../pages/app/History/interface";
import { api } from "../services/api";

export async function registerEntry(name: string, cpf: string) {
  const log: ILog = {
    name,
    cpf,
    entry: new Date().toISOString(),
    exit: null,
  };

  const response = await api.post("/logs", log);
  return response.data;
}

export async function registerExit(cpf: string) {
  const { data: logs } = await api.get<ILog[]>(`/logs?cpf=${cpf}&saida=null`);

  if (logs.length === 0) {
    throw new Error("Nenhuma entrada ativa encontrada para este CPF.");
  }

  const lastLog = logs[logs.length - 1];

  const updatedLog = {
    ...lastLog,
    exit: new Date().toISOString(),
  };

  const response = await api.put(`/logs/${lastLog.id}`, updatedLog);
  return response.data;
}
