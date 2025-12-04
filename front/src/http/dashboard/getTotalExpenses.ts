import { api } from "../../lib/axios";
export interface totalExpensesResponse {
  id: string;
  descricao: string;
  valor: number;
  data: string;
  tipo: string;
  formaPagamento: string;
}

export async function getTotalExpenses() {
  const response = await api.get<totalExpensesResponse[]>("/despesas");
  return response.data;
}
