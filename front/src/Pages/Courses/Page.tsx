import { Aside } from "@/components/Aside";

import { CardsReports } from "@/components/Reports/CardsReports";
import { CourseCard } from "@/components/Courses/CourseCard";
import JavascriptLogo from "../../assests/JavaScriptLogo.png";
import PhpLogo from "../../assests/PhpLogo.png";
import PythonLogo from "../../assests/PythonLogo.png";
import ReactLogo from "../../assests/ReactLogo.png";
import FullstackLogo from "../../assests/FullStackLogo.png";

import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock,
  Plus,
  Star,
  UsersRound,
} from "lucide-react";
import { CoursesForm } from "@/components/Courses/CoursesFormModal";

export function Courses() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        {/*Header*/}
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Cursos</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie o catálogo de cursos da escola
            </p>
          </div>

          <CoursesForm
            title="Cadastre um novo curso"
            description="Insira os dados do curso"
            trigger="Novo curso"
            Icon={Plus}
            button="Adicionar"
          />
        </div>
        {/*Cards com os tipos de despesas*/}
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          <CardsReports
            title={"Total de cursos"}
            value={"16"}
            color={"white"}
            icon={BookOpen}
            bgColor={"white"}
            iconColor="blue-500"
          />
          <CardsReports
            title={"Cursos Ativos"}
            value={"14"}
            color={"white"}
            icon={CircleDot}
            bgColor={"white"}
            iconColor="green-500"
          />
          <CardsReports
            title={"Total de alunos"}
            value={"2000"}
            color={"white"}
            icon={UsersRound}
            bgColor={"white"}
            iconColor="purple-500"
          />
          <CardsReports
            title={"Avaliação média"}
            value={"4.7"}
            color={"white"}
            icon={Star}
            bgColor={"white"}
            iconColor="yellow-500"
          />
        </section>
        <section className="grid gap-3 lg:grid-cols-4">
          <CourseCard
            title="Curso de PHP"
            imageUrl={PhpLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com PHP"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Javascript"
            imageUrl={JavascriptLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de React"
            imageUrl={ReactLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Python"
            imageUrl={PythonLogo}
            status="Ativo"
            description="Aprenda desenvolvimento e analise de dados completo com Python"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Full Stack"
            imageUrl={FullstackLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js,Python e Django"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
        </section>
        {/*Botões de paginação*/}
        <div className="mt-1 mr-1 flex justify-end gap-1">
          <ChevronLeft className="h-10 w-10 rounded-[8px] border-2 transition duration-[2s] hover:bg-gray-400" />
          <ChevronRight className="h-10 w-10 rounded-[8px] border-2 transition duration-[2s] hover:bg-gray-400" />
        </div>
      </div>
    </div>
  );
}
