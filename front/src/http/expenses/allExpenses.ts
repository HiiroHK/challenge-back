import { api } from "@/lib/axios";

export async function AllExpenses() {
  const response = await api.get("/expenses");
  return response.data;
}
