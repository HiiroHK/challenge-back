import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
  CreditCard,
  ChartPie,
  BookOpen,
  Store,
  LogOut,
} from "lucide-react";
import CodiIcon from "../assests/codiCashLogo1.png";
import { Link, useLocation } from "react-router-dom";

type pathProps = {
  path: string | string[];
};

export function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    {
      icon: <Home size={22} />,
      label: "Dashboards",
      path: "/dashboard",
      count: "0",
    },
    {
      icon: <ShoppingCart size={22} />,
      label: "Vendas",
      path: "/vendas",
      count: "12",
    },
    {
      icon: <CreditCard size={22} />,
      label: "Gastos",
      path: "/gastos",
      count: "0",
    },
    {
      icon: <BookOpen size={22} />,
      label: "Cursos",
      path: "/courses",
      count: "0",
    },
    {
      icon: <ChartPie size={22} />,
      label: "Relatórios",
      path: "/relatorios",
      count: "0",
    },
    {
      icon: <Store size={22} />,
      label: "CodiStore",
      path: "/codistore",
      count: "2",
    },
    { icon: <Users size={22} />, label: "Equipe", path: "/users", count: "1" },
    {
      icon: <Settings size={22} />,
      label: "Configurações",
      path: "/configs",
      count: "0",
    },
    {
      icon: <LogOut />,
      label: "Sair",
      path: "/",
      count: "0",
    },
  ];

  const location = useLocation();
  const isActive = ({ path }: pathProps) => location.pathname === path;

  return (
    <aside
      className={`flex flex-col items-center justify-between bg-white shadow-md transition-all duration-300 ${
        isOpen ? "absolute z-10 h-full w-72 md:relative" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex h-16 items-center justify-center border-b">
          {isOpen ? (
            <div className="flex items-center gap-3">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={CodiIcon} alt="" className="h-[80px] w-[80px]" />
              </button>
              <div className="flex flex-col items-baseline">
                <h1 className="flex items-center justify-center gap-2 text-[18px] font-bold text-[#A243D2]">
                  Codi Cash
                </h1>
                <span className="text-[12px]">Gestão Financeira</span>
              </div>
            </div>
          ) : (
            <img
              src={CodiIcon}
              alt=""
              className="h-[100px] w-[100px] object-cover"
            />
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4">
          <ul className="flex flex-col lg:gap-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 rounded-lg px-3 py-3 ${
                    isActive({ path: item.path })
                      ? "cursor-default bg-[#A243D2] text-white"
                      : "cursor-pointer text-[#404a59] transition-colors hover:bg-[#F5F0FC] hover:text-[#A243D2]"
                  }`}
                >
                  <span>{item.icon}</span>
                  {isOpen && (
                    <div className="flex w-full items-center justify-between text-[11px] lg:text-sm">
                      <span className="font-bold">{item.label}</span>
                      {item.count == "0" ? (
                        <span className="hidden">{item.count} </span>
                      ) : (
                        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#f3e8ff] text-base text-[#A243D2]">
                          {item.count}{" "}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className="flex w-full border-t px-2 py-4">
          <div className="flex h-20 w-full flex-col justify-center rounded-lg bg-[#f3e8ff] px-3">
            <h1 className="font-bold text-black">Codi Academy</h1>
            <p className="text-[12px] font-bold text-[#b26df0]">
              Unidade Principal
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
