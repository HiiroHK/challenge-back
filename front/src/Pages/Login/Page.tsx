import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

import codiCashLogo from "../../assests/codiCashLogo.png";

import { useNavigate } from "react-router-dom";

import { Mail, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { fakeLogin } from "@/services/authService";

type FormData = {
  email: string;
  password: string;
};
export function Login() {
  const navigate = useNavigate();

  const [, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  async function handleLogin(data: FormData) {
    setLoading(true);
    try {
      const { token } = await fakeLogin(data);
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex h-screen flex-col bg-purple-900 lg:flex-row">
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="my-10 w-85 text-center text-amber-100"
        >
          <h1 className="mb-6 text-2xl font-bold text-white">Faça seu login</h1>

          <div className="flex h-14 items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-800 px-3 py-2">
            <Mail />
            <input
              className="h-full flex-1 bg-transparent outline-none"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>

          <div className="mt-3 flex h-14 items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-800 px-3 py-2">
            <LockKeyhole />
            <input
              className="h-full flex-1 bg-transparent outline-none"
              type="password"
              placeholder="Senha"
              {...register("password")}
              required
            />
          </div>
          <Button
            type="submit"
            className="mt-5 h-12 w-full cursor-pointer bg-emerald-600 text-xl hover:bg-emerald-700"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={codiCashLogo}
          alt=""
          className="h-72 object-cover lg:h-[580px] lg:w-[580px]"
        />
      </div>
    </div>
  );
}
