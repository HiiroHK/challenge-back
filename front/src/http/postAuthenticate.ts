import { api } from "@/lib/axios";

interface authenticateprops {
  email: string;
  password: string;
}

export async function postauthenticate({ email, password }: authenticateprops) {
  await api.post("/auth", {
    email,
    password,
  });
}
