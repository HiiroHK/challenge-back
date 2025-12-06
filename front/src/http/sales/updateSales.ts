import { api } from "@/lib/axios";

interface updateSalesProps {
  id: string;
  Modalidade: "Online" | "Presencial";
  courseId: string;
  nomeAluno: string;
  email: string;
  telefone: string;
  valorBruto: number;
  desconto: number;
  comisao: number;
  imposto: number;
  taxacartao: number;
  valorLiquido?: number;
}

export async function Updatesales({
  id,
  Modalidade,
  courseId,
  nomeAluno,
  email,
  telefone,
  valorBruto,
  desconto,
  comisao,
  imposto,
  taxacartao,
  valorLiquido,
}: updateSalesProps) {
  const response = await api.put(`/sales/${id}`, {
    modalidade: Modalidade.toUpperCase(),
    courseId,
    nomeAluno,
    email,
    telefone,
    valorBruto,
    desconto,
    comisao,
    imposto,
    taxacartao,
    valorLiquido,
  });
  return response.data;
}
