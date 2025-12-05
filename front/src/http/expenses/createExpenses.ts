import { api } from "@/lib/axios";

interface createExpensesProps {
  id: string;
  name: string;
  description: string;
  value: number;
  type: "Fixa" | "Variável";
  date: Date;
}

export async function CreateExpenses({
  id,
  name,
  description,
  value,
  type,
  date,
}: createExpensesProps) {
  const response = await api.post("/expenses", {
    id,
    name,
    description,
    value,
    type,
    date: new Date(date),
  });
  return response.data;
}
