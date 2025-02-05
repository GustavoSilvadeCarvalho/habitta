import { SlidersHorizontal } from 'lucide-react';

export default function Searchbar() {
    return (
        <div className="absolute w-[90%] max-w-[1000px] top-[710px] left-1/2 transform -translate-x-1/2 flex bg-neutral-950 text-white px-6 py-4 rounded-md justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="flex flex-col justify-center gap-3">
                    <p className="text-neutral-500">Palavra Chave</p>
                    <p className="text-neutral-300">Digite..</p>
                </div>
            </div>

            <div className="space-x-5 flex items-center">
                <hr className="w-px h-14 bg-gray-300 border-none" />
                <div className="flex flex-col justify-center gap-3">
                    <p className="text-neutral-500">Status</p>
                    <div>
                        <p className="text-neutral-300">Todos</p>
                    </div>
                </div>

            </div>
            <div className="space-x-5 flex items-center">
                <hr className="w-px h-14 bg-gray-300 border-none" />
                <div className="flex flex-col justify-center gap-3">
                    <p className="text-neutral-500">Tipo</p>
                    <div>
                        <p className="text-neutral-300">Todos</p>
                    </div>
                </div>

            </div>
            <div className="flex space-x-4">
                <button className="flex items-center border border-neutral-800 px-4 py-4 rounded-md text-neutral-300"><SlidersHorizontal className="mr-2" />Filtros</button>
                <button className="bg-white text-neutral-800 px-4 py-4 rounded-md">Procurar</button>
            </div>
        </div>
    )
}