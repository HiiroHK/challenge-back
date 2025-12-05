import { api } from "@/lib/axios";

interface updateSalesProps {
  id: string;
  modalidade: "Online" | "Presencial";
  courseid: string;
  name: string;
  email: string;
  telefone: string;
  valorbruto: number;
  desconto: number;
  comissão: number;
  impostos: number;
  taxacartão: number;
  valorliquido: number;
}

export async function Updatesales({
  id,
  modalidade,
  courseid,
  name,
  email,
  telefone,
  valorbruto,
  desconto,
  comissão,
  impostos,
  taxacartão,
  valorliquido,
}: updateSalesProps) {
  const response = await api.put(`/sales/${id}`, {
    modalidade,
    courseid,
    name,
    email,
    telefone,
    valorbruto,
    desconto,
    comissão,
    impostos,
    taxacartão,
    valorliquido,
  });
  return response.data;
}
