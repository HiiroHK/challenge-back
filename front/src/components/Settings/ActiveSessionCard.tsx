import { Dot } from 'lucide-react'

type sessoesProps = {
  id: number
  dispositivo: string
  sistema: string
  cidade: string
  date: string
}

export function CardSessoes({
  dispositivo,
  sistema,
  cidade,
  date,
}: sessoesProps) {
  return (
    <div className='flex flex-col md:flex-row  w-full border py-2 px-4 rounded-lg  justify-between '>
      <div className='flex flex-col '>
        <h1 className='font-bold'>{dispositivo}</h1>
        <p className='flex text-gray-500'>
          <span>{sistema}</span>
          <Dot />
          <span>{cidade}</span>
          <Dot />
          <span>{date}</span>
        </p>
      </div>
      <button
        className={`border rounded-lg px-3 py-2   ${
          dispositivo === 'Dispositivo atual'
            ? 'bg-gray-100 cursor-default'
            : 'hover:bg-gray-100 cursor-pointer'
        }`}
      >
        {dispositivo === 'Dispositivo atual' ? 'Atual' : 'Desconectar'}
      </button>
    </div>
  )
}
