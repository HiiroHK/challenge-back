import { api } from "@/lib/axios";

interface deleteSalesProps {
  id: string;
}

export async function DeleteSales({ id }: deleteSalesProps) {
  const response = await api.delete(`/sales/${id}`);
  return response.data;
}
