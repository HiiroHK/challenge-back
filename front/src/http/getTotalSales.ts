import { api } from "../services/api/ApiConfig";
export interface totalSalesResponse {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  valor: number;
}

export async function getTotalSales() {
  const response = await api.get<totalSalesResponse[]>("/Vendas");
  return response.data;
}
