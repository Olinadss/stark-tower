import { z } from "zod";

export const createFormsRoomSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "O nome pode ter no máximo 100 caracteres" }),

  cpf: z
    .string()
    .length(11, { message: "O CPF deve ter exatamente 11 dígitos" }),
});

export type CreateFormsRoomSchema = z.infer<typeof createFormsRoomSchema>;
