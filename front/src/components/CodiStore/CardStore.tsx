type cardPorps = {
  open: () => void;
};

export function CardStore({ open }: cardPorps) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-5 shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-2xl lg:w-96">
      {/* Header */}
      <header className="border-b">
        <h1>Venda #0000</h1>
      </header>

      {/* Info Area */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1">
          <span className="font-bold">Professor: </span>Bruno
        </h2>
        <h2 className="flex items-center gap-1">
          <span className="font-bold">Turno: </span>Manhã
        </h2>
      </div>

      {/* Content */}
      <main className="flex flex-col gap-1">
        <h1 className="font-bold">Itens:</h1>
        <ul>
          <li>
            <span className="font-bold">1x</span> Coca-Cola
          </li>
          <li>
            <span className="font-bold">1x</span> Hamburguer
          </li>
          <li>
            <span className="font-bold">1x</span> ...
          </li>
        </ul>
      </main>

      {/* Valor e Botão */}
      <footer className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold">Valor:</h1>
          <span>R$ 58,56</span>
        </div>
        <button
          onClick={open}
          className="cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
        >
          Detalhes
        </button>
      </footer>
    </div>
  );
}
