import { SlidersHorizontal } from "lucide-react";

export default function Searchbar() {
    return (
        <div className="absolute w-[90%] max-w-[1000px] md:top-[710px] top-[530px] left-1/2 transform -translate-x-1/2 bg-neutral-950 text-white px-6 py-4 rounded-md flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
            {/* Palavra-chave */}
            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500">Palavra Chave</p>
                <input
                    type="text"
                    className="bg-transparent md:border-none border-b border-neutral-700 text-neutral-300 focus:outline-none w-full"
                    placeholder="Digite aqui"
                />
            </div>

            {/* Separador */}
            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            {/* Status */}
            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500 ml-1">Status</p>
                <select className="text-neutral-300 bg-transparent md:border-none border-b border-neutral-700 focus:outline-none w-full">
                    <option value="Todos">Todos</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>
            </div>

            {/* Separador */}
            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            {/* Tipo */}
            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500 ml-1">Tipo</p>
                <select className="text-neutral-300 bg-transparent md:border-none border-b border-neutral-700 focus:outline-none w-full">
                    <option value="Todos">Todos</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                </select>
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4">
                <button className="flex items-center border border-neutral-800 px-4 py-3 rounded-md text-neutral-300 w-full md:w-auto">
                    <SlidersHorizontal className="mr-2" />
                    Filtros
                </button>
                <button className="bg-white text-neutral-800 px-4 py-3 rounded-md w-full md:w-auto">
                    Procurar
                </button>
            </div>
        </div>
    );
}
