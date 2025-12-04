import { api } from "@/lib/axios";

interface deleteExpensesProps {
  id: string;
}

export async function deleteExpenses({ id }: deleteExpensesProps) {
  const response = await api.delete(`/expenses/${id}`);
  return response.data;
}
