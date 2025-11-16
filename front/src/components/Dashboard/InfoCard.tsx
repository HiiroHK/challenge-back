import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import type { IconBaseProps } from "react-icons";

export type colorTypes =
  | "green"
  | "red"
  | "blue"
  | "orange"
  | "purple"
  | "white";
interface InfoCardProps {
  name: string;
  iconMain?: React.ComponentType<IconBaseProps>;
  iconSecundary?: React.ComponentType<IconBaseProps>;
  value: number;
  color?: colorTypes;
}

export function InfoCard({
  name,
  iconMain: IconMain,
  iconSecundary: IconSecondary,
  value,
  color,
}: InfoCardProps) {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return (
    <div>
      {color === "green" && (
        <Card className="my-8 h-40 gap-1 text-green-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-green-600" />}
            <CardTitle className="flex w-20 flex-row justify-center gap-2 rounded-3xl border-1 border-emerald-600 bg-emerald-100">
              {IconSecondary && (
                <IconSecondary size={16} className="text-green-600" />
              )}{" "}
              <span className="text-center text-green-600">5%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}

      {color === "red" && (
        <Card className="my-8 h-40 gap-1 text-red-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-red-600" />}
            <CardTitle className="flex w-20 flex-row justify-center gap-2 rounded-3xl border-1 border-red-600 bg-red-100">
              {IconSecondary && (
                <IconSecondary size={16} className="text-red-600" />
              )}{" "}
              <span>2,2%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}
      {color === "blue" && (
        <Card className="my-8 h-40 gap-1 text-blue-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-blue-600" />}
            <CardTitle className="flex w-20 flex-row justify-center gap-2 rounded-3xl border-1 border-sky-600 bg-sky-100">
              {IconSecondary && (
                <IconSecondary size={16} className="text-blue-600" />
              )}{" "}
              <span>5,2%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
