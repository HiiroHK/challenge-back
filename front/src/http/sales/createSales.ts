import { api } from "@/lib/axios";

interface createSalesProps {
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
  dataVenda: Date;
  valorLiquido?: number;
}

export async function Createsales({
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
  dataVenda,
  valorLiquido,
}: createSalesProps) {
  const response = await api.post("/sales", {
    id,
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
    dataVenda: new Date(dataVenda),
    valorLiquido,
  });
  return response.data;
}
