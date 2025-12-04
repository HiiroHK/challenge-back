import { api } from "@/lib/axios";

interface createExpensesProps {
  id: string;
  name: string;
  description: string;
  value: number;
  type: string;
}

export async function createExpenses({
  id,
  name,
  description,
  value,
  type,
}: createExpensesProps) {
  const response = await api.post("/expenses", {
    id,
    name,
    description,
    value,
    type,
  });
  return response.data;
}
