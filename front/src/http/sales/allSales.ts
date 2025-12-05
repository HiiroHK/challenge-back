import { api } from "@/lib/axios";

export async function AllSales() {
  const response = await api.get("/sales");
  return response.data;
}
