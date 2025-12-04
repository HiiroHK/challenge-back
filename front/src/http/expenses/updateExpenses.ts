import { api } from "@/lib/axios";

interface updateExpenseProps {
  id: string;
  name: string;
  description: string;
  value: number;
  type: string;
}

export async function updateExpenses({
  id,
  name,
  description,
  value,
  type,
}: updateExpenseProps) {
  const response = await api.put("/expenses/:id", {
    id,
    name,
    description,
    value,
    type,
  });
  return response.data;
}
