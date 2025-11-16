import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { IconBaseProps } from "react-icons";

import type { colorTypes } from "@/components/Dashboard/InfoCard";
export type bgColorTypes =
  | "green"
  | "red"
  | "blue"
  | "orange"
  | "purple"
  | "white";
interface ReportsCardProps {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  value: string;
  color?: colorTypes;
  bgColor?: bgColorTypes;
  iconColor?: string;
}

export function CardsReports({
  title,
  icon: Icon,
  value,
  color,
  bgColor,
  iconColor,
}: ReportsCardProps) {
  return (
    <div>
      {color === "green" && bgColor === "green" && (
        <Card className="my-6 flex flex-row justify-between border-2 border-emerald-500 bg-green-100 text-emerald-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-emerald-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
      {color === "red" && bgColor === "red" && (
        <Card className="my-6 flex flex-row justify-between border-2 border-red-500 bg-red-100 text-red-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                R$ {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-red-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}

      {color === "blue" && bgColor === "blue" && (
        <Card className="my-6 flex flex-row justify-between border-2 border-sky-500 bg-cyan-100 text-sky-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-sky-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
      {color === "orange" && bgColor === "orange" && (
        <Card className="my-6 flex flex-row justify-between border-2 border-orange-500 bg-amber-100 text-orange-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                R$ {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-orange-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
      {color === "purple" && bgColor === "purple" && (
        <Card className="my-6 flex flex-row justify-between border-2 border-purple-500 bg-violet-100 text-purple-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                R$ {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-purple-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
      {color === "white" && bgColor === "white" && (
        <Card className="border-white-500 bg-white-100 my-6 flex flex-row justify-between border-2 text-zinc-500">
          <div>
            <CardTitle className="ml-8 text-[16px] font-semibold">
              {title}
            </CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className={`text-${iconColor}`} />}
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
}
