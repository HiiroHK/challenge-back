import { X } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
type modalProps = {
  haandleOpenModalNew: () => void;
  onAddUser: (user: User) => void;
};
type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  salario: number;
  cargo: string;
  status: string;
  departament: string;
};

export function NewUserModal({ haandleOpenModalNew, onAddUser }: modalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("");
  const [status, setStatus] = useState("");
  const [departament, setDepartament] = useState("");

  function handleAddUser(e: React.FormEvent) {
    e.preventDefault();

    const newUser: User = {
      id: String(Date.now()),
      name,
      email,
      phone,
      salario: Number(salario),
      cargo,
      status,
      departament,
    };

    onAddUser(newUser);
    haandleOpenModalNew();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-3">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-10">
        <div className="mb-6 flex items-center justify-between text-black">
          <h1 className="text-xl font-semibold">Adicionar Colaborador</h1>
          <button
            className="cursor-pointer hover:text-red-500"
            onClick={haandleOpenModalNew}
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Dados Pessoais:</h1>
          <form className="flex flex-col gap-3" onSubmit={handleAddUser}>
            <div className="flex w-full gap-3">
              <div className="flex w-1/2 flex-col">
                <label> Nome: </label>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-1 shadow-lg outline-none"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label>Telefone: </label>
                <input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-1 shadow-lg outline-none"
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label> Email: </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 p-1 shadow-lg outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label> Salario:</label>
              <input
                required
                type="number"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                className="rounded-lg border border-gray-300 p-1 shadow-lg outline-none"
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Select value={cargo} onValueChange={setCargo} required>
                <SelectTrigger className="flex w-1/2 border border-gray-300 p-5 shadow-lg">
                  <SelectValue placeholder="Cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instrutor">Instrutor</SelectItem>
                  <SelectItem value="Coordenador">Coordenador</SelectItem>
                  <SelectItem value="Assistente">Assistente</SelectItem>
                  <SelectItem value="Gerente">Gerente</SelectItem>
                </SelectContent>
              </Select>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger className="flex w-1/2 border border-gray-300 p-5 shadow-lg">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Ferias">Ferias</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                value={departament}
                onValueChange={setDepartament}
                required
              >
                <SelectTrigger className="border border-gray-300 p-5 shadow-lg">
                  <SelectValue placeholder="Selecione o departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Mobile">Mobile</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Financeiro">Financeiro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center rounded-lg bg-[#A243D2] py-3"
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
