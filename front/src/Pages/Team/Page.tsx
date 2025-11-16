import { Aside } from "@/components/Aside";
import { NewUserModal } from "@/components/Team/NewUserModal";
import { AlterarModal } from "@/components/Team/EditUserModal";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { UserCard } from "@/components/Team/TeamCard";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

{
  /* tipos dos dados dos usuarios */
}
type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  departament: string;
  status: string;
  cargo: string;
  salario: number;
};

export function Team() {
  const [userList, setUserList] = useState<User[]>([
    {
      id: "1",
      name: "Mariana Silva",
      email: "mariana.silva@gmail.com",
      phone: "(11) 98888-1234",
      departament: "Frontend",
      cargo: "Instrutor",
      salario: 5500,
      status: "Ativo",
    },
    {
      id: "2",
      name: "Carlos Souza",
      email: "carlos.souza@gmail.com",
      phone: "(21) 97777-4321",
      departament: "Backend",
      cargo: "Coordenador",
      salario: 8500,
      status: "Ativo",
    },
    {
      id: "3",
      name: "Fernanda Lima",
      email: "fernanda.lima@gmail.com",
      phone: "(31) 96666-9876",
      departament: "Mobile",
      cargo: "Assistente",
      salario: 4200,
      status: "Férias",
    },
    {
      id: "4",
      name: "Rafael Costa",
      email: "rafael.costa@gmail.com",
      phone: "(41) 95555-6543",
      departament: "Marketing",
      cargo: "Gerente",
      salario: 9500,
      status: "Ativo",
    },
    {
      id: "5",
      name: "Isabela Martins",
      email: "isabela.martins@gmail.com",
      phone: "(51) 94444-3210",
      departament: "Financeiro",
      cargo: "Assistente",
      salario: 4700,
      status: "Ferias",
    },
    {
      id: "6",
      name: "Lucas Almeida",
      email: "lucas.almeida@gmail.com",
      phone: "(61) 93333-1122",
      departament: "Frontend",
      cargo: "Instrutor",
      salario: 5200,
      status: "Ativo",
    },
    {
      id: "7",
      name: "Ana Pereira",
      email: "ana.pereira@gmail.com",
      phone: "(71) 92222-3344",
      departament: "Backend",
      cargo: "Coordenador",
      salario: 8300,
      status: "Ativo",
    },
    {
      id: "8",
      name: "Bruno Fernandes",
      email: "bruno.fernandes@gmail.com",
      phone: "(81) 91111-5566",
      departament: "Mobile",
      cargo: "Instrutor",
      salario: 5700,
      status: "Ativo",
    },
    {
      id: "9",
      name: "Patrícia Gomes",
      email: "patricia.gomes@gmail.com",
      phone: "(91) 98888-7788",
      departament: "Marketing",
      cargo: "Assistente",
      salario: 4600,
      status: "Férias",
    },
    {
      id: "10",
      name: "Gabriel Rocha",
      email: "gabriel.rocha@gmail.com",
      phone: "(85) 97777-8899",
      departament: "Financeiro",
      cargo: "Gerente",
      salario: 9800,
      status: "Ativo",
    },
    {
      id: "11",
      name: "Gabriela Lima",
      email: "gabriela.lima@gmail.com",
      phone: "(85) 97777-8899",
      departament: "Financeiro",
      cargo: "Coordenador",
      salario: 9800,
      status: "Ferias",
    },
  ]);
  {
    /* Cadastro de novo user */
  }
  const [isOpenNew, setIsOpenNew] = useState(false);
  function handleOpenModalNew() {
    setIsOpenNew(!isOpenNew);
  }

  {
    /* Achar user */
  }
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  {
    /* Modal de editar usuario */
  }
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  function handleOpenModalEdit(userId: string) {
    setIsOpenEdit(!isOpenEdit);
    setSelectedUser(userList.find((user) => user.id === userId) || null);
  }
  function closeEditModal() {
    setIsOpenEdit(false);
    setSelectedUser(null);
  }
  {
    /* Sistema de filtro */
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCargo, setSelectedCargo] = useState<string>("all");
  const filteredUsers = userList.filter((user) => {
    const matchesCargo =
      selectedCargo === "all" || user.cargo === selectedCargo;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCargo && matchesSearch;
  });
  {
    /* Calculos dos totais de membros, membros ativos, departamentos, folha de pagamento */
  }
  const totalMembros = filteredUsers.length;
  const membrosAtivos = filteredUsers.filter(
    (user) => user.status === "Ativo",
  ).length;
  const departamentosUnicos = new Set(
    filteredUsers.map((user) => user.departament),
  );
  const totalDepartamentos = departamentosUnicos.size;
  const folhaPagamento = filteredUsers.reduce(
    (acc, user) => acc + user.salario,
    0,
  );

  return (
    <div className="flex h-screen">
      <Aside />

      <div className="flex w-full flex-col gap-8 overflow-auto bg-gray-100 p-5">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Gestão de Equipe</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie membros da equipe e suas informações
            </p>
          </div>
          <div className="w-full lg:w-fit">
            <button
              onClick={handleOpenModalNew}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white"
            >
              <UserPlus />
              <span>Novo Membro</span>
            </button>
          </div>
        </div>

        {/* input */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5 shadow lg:flex-row">
          <div className="flex items-center gap-3 rounded-lg border px-3 py-2 md:w-full lg:w-5/6">
            <Search />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome ou e-mail..."
              className="w-full outline-none"
            />
          </div>
          <div className="h-full md:w-full lg:w-1/6">
            <Select
              value={selectedCargo}
              onValueChange={(value) => setSelectedCargo(value)}
            >
              <SelectTrigger className="flex w-full cursor-pointer p-5">
                <SelectValue placeholder="Todos os cargos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os cargos</SelectItem>
                <SelectItem value="Instrutor">Instrutor</SelectItem>
                <SelectItem value="Coordenador">Coordenador</SelectItem>
                <SelectItem value="Assistente">Assistente</SelectItem>
                <SelectItem value="Gerente">Gerente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              departament={user.departament}
              email={user.email}
              phone={user.phone}
              status={user.status}
              salario={user.salario}
              cargo={user.cargo}
              openEdit={() => handleOpenModalEdit(user.id)}
            />
          ))}
        </div>

        {/* Dados */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="flex h-34 flex-col items-center justify-center rounded-lg border bg-white">
            <span className="text-4xl font-bold text-[#A243D2]">
              {totalMembros}
            </span>
            <span>Total de Membros</span>
          </div>
          <div className="flex h-34 flex-col items-center justify-center rounded-lg border bg-white">
            <span className="text-4xl font-bold text-green-600">
              {membrosAtivos}{" "}
            </span>
            <span>Membros ativos</span>
          </div>
          <div className="flex h-34 flex-col items-center justify-center rounded-lg border bg-white">
            <span className="text-4xl font-bold text-blue-600">
              {totalDepartamentos}
            </span>
            <span>Departamentos</span>
          </div>
          <div className="flex h-34 flex-col items-center justify-center rounded-lg border bg-white">
            <span className="text-xl font-bold text-orange-600 lg:text-4xl">
              {folhaPagamento.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span className="text-[14px] lg:text-[18px]">
              Folha de pagamento
            </span>
          </div>
        </div>
      </div>

      {/* Renderizando os modais na tela */}
      <div>
        {isOpenNew && (
          <NewUserModal
            haandleOpenModalNew={handleOpenModalNew}
            onAddUser={(user) => setUserList((prev) => [...prev, user])}
          />
        )}
        {isOpenEdit && (
          <AlterarModal close={closeEditModal} user={selectedUser} />
        )}
      </div>
    </div>
  );
}
