import { api } from "@/lib/axios";

export async function AllCourses() {
  const response = await api.get("/courses");
  return response.data;
}
