import { z } from "zod";

export const createFormsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "O nome pode ter no máximo 100 caracteres" }),

  cpf: z
    .string()
    .length(11, { message: "O CPF deve ter exatamente 11 dígitos" }),

  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "E-mail inválido" }),

  birthDate: z
    .string()
    .optional()
    .refine(
      (date) => {
        if (!date) return true;
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime());
      },
      { message: "Data inválida" }
    ),
});

export type CreateFormsSchema = z.infer<typeof createFormsSchema>;
