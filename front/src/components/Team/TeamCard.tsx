import { Calendar, Mail, Phone, SquarePen, Trash2 } from "lucide-react";
import Logo from "@/assests/CodiLogoAside.png";

type cardProps = {
  name: string;
  key: string;
  email: string;
  departament: string;
  phone: string;
  status: string;
  salario: number;
  cargo: string;
  openEdit: () => void;
};

export function UserCard({
  name,
  email,
  departament,
  phone,
  status,
  cargo,
  salario,
  openEdit,
}: cardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-white p-3 transition-shadow duration-500 ease-in-out hover:shadow-2xl md:w-full lg:w-[415px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" className="h-10 w-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold">{name}</h1>
            <p className="text-gray-500">{cargo}</p>
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-2xl px-2 py-0.5 ${
            status === "Ativo" ? "bg-green-100" : "bg-yellow-100"
          }`}
        >
          <span
            className={`text-[14px] ${
              status === "Ativo" ? "text-green-800" : "text-yellow-800"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 border-b pb-5">
        <span className="flex items-center gap-2 text-[14px] text-gray-700">
          <Mail size={16} /> {email}
        </span>
        <span className="flex items-center gap-2 text-[14px] text-gray-700">
          <Phone size={16} /> {phone}
        </span>
        <span className="flex items-center gap-2 text-[14px] text-gray-700">
          <Calendar size={16} /> Desde 14/01/2023
        </span>
      </div>

      {/* Data */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold text-gray-900">
            Departamento:
          </span>
          <span className="text-[14px] text-gray-600">{departament}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold text-gray-900">
            Salário:
          </span>
          <span className="text-[14px] font-bold text-[#A243D2]">
            R$ {salario}
          </span>
        </div>
      </div>

      {/* Button area */}
      <div className="flex gap-2">
        <button
          onClick={openEdit}
          className="flex w-11/12 cursor-pointer items-center justify-center gap-3 rounded-lg border p-2 font-bold hover:bg-gray-100"
        >
          <SquarePen />
          Editar
        </button>
        <button className="flex cursor-pointer items-center justify-center rounded-lg border p-2 font-bold text-red-500 hover:bg-gray-100">
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
