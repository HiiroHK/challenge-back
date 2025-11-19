import { api } from "@/lib/axios";

interface getauthenticate {
  email: string;
  password: string;
}

export async function authenticate({ email, password }: getauthenticate) {
  await api.post("/autenticate", {
    email,
    password,
  });
}
