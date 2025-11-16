import { X } from "lucide-react";

type modalProps = {
  open: () => void;
};
export function CardDetails({ open }: modalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-3">
      <div className="relative flex w-full max-w-xl flex-col gap-7 rounded-2xl bg-white p-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Venda #0000</h1>
          <button className="cursor-pointer hover:text-red-500" onClick={open}>
            {" "}
            <X />
          </button>
        </header>
        {/* Details */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Professor Responsavel:</h1>
            <h2>Bruno</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Turno: </h1>
            <h2>Manhã</h2>
          </div>
        </div>

        {/* Itens */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">Itens: </h1>

          <div className="flex flex-col rounded-2xl border p-3 shadow-lg">
            <ul className="flex flex-col">
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
              <li className="border-b">
                <div className="flex items-center justify-between">
                  <span>1x Coca</span>
                  <span className="flex w-24 items-center justify-center border-l">
                    R$ 80,00
                  </span>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <h1>Total</h1>
              <h1 className="flex w-24 items-center justify-center border-l">
                R$ 80,00
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
