import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Aside } from "@/components/Aside";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Building2,
  Camera,
  Dot,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  ShieldAlert,
  User,
} from "lucide-react";
import Logo from "../../assests/CodiLogoAside.png";
import { CardSessoes } from "@/components/Settings/ActiveSessionCard";
import { useState } from "react";

const sessoesAtivas = [
  {
    dispositivo: "Dispositivo atual",
    sistema: "Chrome",
    cidade: "São Paulo, SP",
    date: "Agora",
    id: 1,
  },
  {
    dispositivo: "iPhone de João",
    sistema: "Safari iOS",
    cidade: "Rio de Janeiro, RJ",
    date: "Há 2 horas",
    id: 2,
  },
  {
    dispositivo: "Notebook Dell",
    sistema: "Firefox (Windows)",
    cidade: "Belo Horizonte, MG",
    date: "Ontem às 22:15",
    id: 3,
  },
];

const unidadesAtivas = [
  {
    unidade: "Matriz - São Paulo",
    cidade: "Av. Paulista, 1000 - São Paulo, SP",
    id: 1,
    status: "Desconectado",
    funcionarios: 10,
    vendas: 455420,
    sinc: 3,
  },
  {
    unidade: "Filial 1 - Rio de Janeiro",
    cidade: "Rua das Flores, 200 - Rio de Janeiro, RJ",
    id: 2,
    status: "Conectado e sincronizado",
    funcionarios: 11,
    vendas: 33000,
    sinc: 3,
  },
  {
    unidade: "Filial 2 - Belo Horizonte",
    cidade: "Av. Afonso Pena, 300 - Belo Horizonte, MG",
    id: 3,
    status: "Conectado e sincronizado",
    funcionarios: 5,
    vendas: 11000,
    sinc: 3,
  },
  {
    unidade: "Filial 3 - Brasília",
    cidade: "SCS Quadra 1, Bloco A - Brasília, DF",
    id: 4,
    status: "Desconectado",
    funcionarios: 7,
    vendas: 12000,
    sinc: 3,
  },
];

export function Settings() {
  const [selectedUnidade, setSelectedUnidade] = useState<string>("1");
  const unidadeSelecionada = unidadesAtivas.find(
    (unidade) => String(unidade.id) === selectedUnidade,
  );
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-5 overflow-auto p-5">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Configurações</h1>
          <p className="text-[18px] text-gray-500">
            Gerencie suas preferências e configurações do sistema
          </p>
        </div>

        {/* Select area */}
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid h-fit w-full grid-cols-2 bg-gray-200 md:grid-cols-4">
            <TabsTrigger value="account" className="cursor-pointer py-2">
              <User /> Perfil
            </TabsTrigger>
            <TabsTrigger value="notification" className="cursor-pointer">
              <Bell /> Notificações
            </TabsTrigger>
            <TabsTrigger value="securit" className="cursor-pointer">
              <ShieldAlert /> Segurança
            </TabsTrigger>
            <TabsTrigger value="unit" className="cursor-pointer">
              <Building2 /> Unidades
            </TabsTrigger>
          </TabsList>
          {/* Conteudo de perfil */}
          <TabsContent value="account">
            <div className="flex w-full flex-col gap-8 rounded-lg bg-white px-12 py-7">
              <h1 className="flex items-center gap-2 text-2xl font-semibold text-black md:text-3xl">
                <User size={32} />
                Informações Pessoais
              </h1>
              {/* Area da Foto */}
              <div className="flex flex-col items-center gap-5 border-b pb-10 lg:flex-row">
                <img src={Logo} alt="" className="h-24 w-24" />
                <div className="flex flex-col gap-1">
                  <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border p-2 text-[15px] font-bold hover:bg-gray-100">
                    <Camera /> Alterar Foto{" "}
                  </button>
                  <p className="text-[14px] text-gray-500">
                    JPG, PNG ou GIF (máx. 2MB)
                  </p>
                </div>
              </div>

              {/* Area dos inputs */}
              <div className="flex flex-col gap-8">
                {/* Primeiro Grupo */}
                <div className="flex flex-col gap-9 md:flex-row">
                  {/* Nome */}
                  <div className="flex w-full flex-col">
                    <label>Nome completo</label>
                    <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                      <User size={19} />
                      <input type="text" className="w-full outline-none" />
                    </div>
                  </div>
                  {/* E-mail */}
                  <div className="flex w-full flex-col">
                    <label>E-mail</label>
                    <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                      <Mail size={19} />
                      <input type="text" className="w-full outline-none" />
                    </div>
                  </div>
                </div>
                {/* Segundo Grupo */}
                <div className="flex flex-col gap-9 md:flex-row">
                  {/* Telefone */}
                  <div className="flex w-full flex-col">
                    <label>Telefone</label>
                    <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                      <Phone size={19} />
                      <input type="text" className="w-full outline-none" />
                    </div>
                  </div>
                  {/* Endereço */}
                  <div className="flex w-full flex-col">
                    <label>Endereço</label>
                    <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                      <MapPin size={19} />
                      <input type="text" className="w-full outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="flex justify-center md:justify-end">
                <button className="flex w-fit cursor-pointer gap-3 rounded-lg bg-[#A243D2] px-3 py-2 text-white">
                  <Save />
                  Salvar Mudanças
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de notificações */}
          <TabsContent value="notification">
            <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-12 py-7">
              <h1 className="flex items-center gap-2 text-2xl font-semibold text-black md:text-3xl">
                <Bell size={32} />
                Preferências de Notificação
              </h1>
              <span className="text-lg font-semibold md:text-2xl">
                Notificações por E-mail
              </span>

              {/* Primeiros inputs de notificações */}
              <div className="flex flex-col gap-3 border-b pb-5">
                {/* Novas vendas */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Novas vendas</span>
                    <span className="text-gray-500">
                      Receber e-mail quando uma nova venda for registrada
                    </span>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>

                {/* Novas Despesas */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Novas Despesas</span>
                    <span className="text-gray-500">
                      Receber e-mail quando uma nova despesa for registrada
                    </span>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>

                {/* Relatorios Mensais */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Relatórios Mensais</span>
                    <span className="text-gray-500">
                      Receber relátorio mensal por e-mail
                    </span>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* Notificaçoes Push */}
              <div>
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">
                    Notificações Push
                  </span>
                  <div className="flex flex-col gap-3 pb-5">
                    {/* Vendas*/}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold">Vendas</span>
                        <span className="text-gray-500">
                          Notificações instantâneas sobre vendas
                        </span>
                      </div>
                      <div>
                        <Switch />
                      </div>
                    </div>
                    {/* Despesas */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold">Despesas</span>
                        <span className="text-gray-500">
                          Notificações instâneas sobre despesas
                        </span>
                      </div>
                      <div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="flex justify-end">
                <button className="flex w-fit cursor-pointer gap-3 rounded-lg bg-[#A243D2] px-3 py-2 text-white">
                  <Save />
                  Salvar Mudanças
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de Segurança */}
          <TabsContent value="securit">
            {/* Div principal */}
            <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-12 py-7">
              {/* Header */}
              <div>
                <h1 className="flex items-center gap-2 text-3xl font-semibold text-black">
                  <Shield size={32} /> Segurança da Conta
                </h1>
              </div>

              {/* Area de inputs */}
              <div className="flex flex-col gap-5 border-b pb-8">
                <h1 className="text-[20px] font-bold">Alterar Senha</h1>
                {/* Primeira linha */}
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  {/* Senha atual */}
                  <div className="flex w-full flex-col md:w-1/2">
                    <label className="font-semibold"> Senha Atual</label>
                    <input
                      type="text"
                      placeholder="Digite sua senha atual"
                      className="w-full rounded-lg border p-2"
                    />
                  </div>
                  {/* Nova senha */}
                  <div className="flex w-full flex-col md:w-1/2">
                    <label> Nova Senha</label>
                    <input
                      type="text"
                      placeholder="Digite sua nova senha"
                      className="w-full rounded-lg border p-2"
                    />
                  </div>
                </div>

                {/* Segunda Linha */}
                <div className="flex w-full flex-col md:w-1/2">
                  <label className="font-semibold"> Confirmar Nova Senha</label>
                  <input
                    type="text"
                    placeholder="Digite sua nova senha"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>

              {/* Area das Sessões Ativas */}
              <div className="flex flex-col gap-3">
                <h1 className="text-[20px] font-bold">Sessões Ativas</h1>
                <div className="flex flex-col gap-3">
                  {sessoesAtivas.map((sessao) => (
                    <CardSessoes
                      key={sessao.id}
                      id={sessao.id}
                      dispositivo={sessao.dispositivo}
                      cidade={sessao.cidade}
                      sistema={sessao.sistema}
                      date={sessao.date}
                    />
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col justify-end gap-3 md:flex-row">
                <button className="cursor-pointer rounded-lg border px-4 py-3 font-semibold hover:bg-gray-100">
                  Desconectar Todos
                </button>
                <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-[#A243D2] px-4 py-3 font-semibold text-white">
                  <Save size={16} />
                  Alterar Senha
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de Unidades */}
          <TabsContent value="unit">
            {/* Div Principal */}
            <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-12 py-7">
              {/* Header */}
              <div>
                <h1 className="flex items-center gap-2 text-3xl font-semibold text-black">
                  <Building2 size={32} /> Seleção de Unidade
                </h1>
              </div>
              {/* Seleção de unidade */}
              <div className="flex flex-col">
                <h1 className="font-semibold">Unidade Ativa</h1>
                <p className="text-gray-500">
                  Selecione a unidade para visualizar os dados financeiros
                </p>

                <div className="border-b py-5">
                  <Select
                    value={selectedUnidade}
                    onValueChange={(value) => setSelectedUnidade(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Unidades" />
                    </SelectTrigger>
                    <SelectContent>
                      {unidadesAtivas.map((unidade) => (
                        <SelectItem value={`${unidade.id}`}>
                          <div className="flex flex-col">
                            <h1 className="font-bold">{unidade.unidade} </h1>
                            <p className="text-gray-500">{unidade.cidade} </p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Unidade Selecionada */}
              <div className="flex flex-col gap-2 border-b pb-8">
                <h1 className="font-semibold">Unidade Selecionada</h1>
                {unidadeSelecionada && (
                  <div className="flex items-center gap-5 rounded-lg bg-[#F5F0FC] p-3">
                    <Building2 size={32} className="text-[#A243D2]" />
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold">
                        {unidadeSelecionada.unidade}
                      </h1>
                      <p className="font-semibold text-[#A243D2]">
                        {unidadeSelecionada.cidade}
                      </p>
                      <span
                        className={`flex items-center ${
                          unidadeSelecionada.status ==
                          "Conectado e sincronizado"
                            ? "text-green-500"
                            : "text-red-500"
                        } `}
                      >
                        <Dot /> {unidadeSelecionada.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dados da unidade */}
              <div>
                <h1 className="font-semibold">Informações da Unidade</h1>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {/* Status */}
                    <div className="flex w-1/2 flex-col items-center justify-center rounded-lg border p-5">
                      <span className="text-gray-500">Status</span>
                      <span
                        className={`${
                          unidadeSelecionada?.status == "Desconectado"
                            ? "text-red-500"
                            : "text-green-500"
                        } `}
                      >
                        {unidadeSelecionada?.status == "Desconectado"
                          ? "Desconectada"
                          : "Ativa"}{" "}
                      </span>
                    </div>
                    {/* Ultima sincronização */}
                    <div className="flex w-1/2 flex-col items-center justify-center rounded-lg border p-5">
                      <span className="text-[12px] text-gray-500">
                        Última Sincronização
                      </span>
                      <span className="font-bold">
                        Há {unidadeSelecionada?.sinc} horas{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* Vendas do Mês */}
                    <div className="flex w-1/2 flex-col items-center justify-center rounded-lg border p-5">
                      <span className="text-gray-500">Vendas do Mês</span>
                      <span className="text-[13px] font-bold lg:text-2xl">
                        {unidadeSelecionada?.vendas.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                    {/* Funcionarios */}
                    <div className="flex w-1/2 flex-col items-center justify-center rounded-lg border p-5">
                      <span className="text-gray-500">Funcionários</span>
                      <span className="font-bold">
                        {unidadeSelecionada?.funcionarios}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
