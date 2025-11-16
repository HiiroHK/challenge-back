import { CoursesForm } from "@/components/Courses/CoursesFormModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import type { IconBaseProps } from "react-icons";
import { SquarePen } from "lucide-react";
interface CourseCardProps {
  imageUrl: string;
  title: string;
  status: string;
  description: string;
  students: number;
  hours: number;
  rating: number;
  icon?: React.ComponentType<IconBaseProps>;
  iconMain?: React.ComponentType<IconBaseProps>;
  iconSecundary?: React.ComponentType<IconBaseProps>;
  price: number;
}
export function CourseCard({
  imageUrl,
  title,
  status,
  description,
  students,
  hours,
  rating,
  icon: Icon,
  iconMain: IconMain,
  iconSecundary: IconSecundary,
  price,
}: CourseCardProps) {
  return (
    <>
      <Card className="relative flex w-full flex-col gap-4 overflow-hidden lg:w-76">
        <CardHeader className="w-full border">
          <img
            src={imageUrl}
            className="absolute top-0 left-0 h-45 w-full"
            alt="Logo do Curso Javascript"
          />
        </CardHeader>

        <CardContent className="mt-36">
          <div className="flex justify-between">
            <CardTitle className="bold">{title}</CardTitle>
            <span className="bold w-14 rounded-full bg-sky-400 text-center text-white">
              {status}
            </span>
          </div>

          <CardDescription className="mt-2 text-zinc-400">
            {description}
          </CardDescription>
          <CardDescription className="mt-4 flex justify-between">
            <span className="flex flex-row gap-1">
              {Icon && <Icon size={18} className="text-zinc-500" />}
              {students}
            </span>
            <span className="flex flex-row gap-1">
              {IconMain && <IconMain size={18} className="text-zinc-500" />}
              {hours}
            </span>
          </CardDescription>
          <CardDescription className="mt-3 flex justify-between">
            <span className="flex flex-row gap-1">
              {IconSecundary && (
                <IconSecundary
                  size={18}
                  className="fill-yellow-500 text-yellow-500"
                />
              )}{" "}
              {rating}
            </span>
            <span className="text-[20px] font-bold text-blue-500">
              R$ {price}
            </span>
          </CardDescription>
          <CardDescription>
            <CoursesForm
              trigger="Editar curso"
              title="Editar dados do curso"
              description="Insira os dados"
              button="Salvar"
              Icon={SquarePen}
            />
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
