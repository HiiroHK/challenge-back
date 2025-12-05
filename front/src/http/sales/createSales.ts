import { api } from "@/lib/axios";

interface createSalesProps {
  id: string;
  modalidade: "Online" | "Presencial";
  courseid: string;
  name: string;
  email: string;
  telefone: string;
  valorbruto: number;
  desconto: number;
  comissao: number;
  impostos: number;
  taxacartão: number;
  valorliquido: number;
}

export async function Createsales({
  id,
  modalidade,
  courseid,
  name,
  email,
  telefone,
  valorbruto,
  desconto,
  comissao,
  impostos,
  taxacartão,
  valorliquido,
}: createSalesProps) {
  const response = await api.post("/sales", {
    id,
    modalidade,
    courseid,
    name,
    email,
    telefone,
    valorbruto,
    desconto,
    comissao,
    impostos,
    taxacartão,
    valorliquido,
  });
  return response.data;
}
