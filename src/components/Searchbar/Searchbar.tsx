'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Searchbar() {
    const router = useRouter()
    const [propertyType, setPropertyType] = useState("")
    const [location, setLocation] = useState("")

    const handleSearch = () => {
        const searchParams = new URLSearchParams()
        if (propertyType) searchParams.append("type", propertyType)
        if (location) searchParams.append("location", location)

        router.push(`/imoveis?${searchParams.toString()}`)
    }

    return (
        <div className="absolute w-[90%] max-w-[1000px] md:top-[710px] top-[530px] left-1/2 transform -translate-x-1/2 bg-neutral-950 text-white px-6 py-4 rounded-md flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500 ml-1">Tipo de imóvel</p>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="text-neutral-300 bg-transparent md:border-none border-b border-neutral-700 focus:outline-none w-full">
                    <option value="Todos">Todos</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="terreno">Terreno</option>
                    <option value="comercial">Comercial</option>
                    <option value="mansão">Mansão</option>
                </select>
            </div>

            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500">Localização</p>
                <input
                    type="text"
                    placeholder="..."
                    className="bg-transparent"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4">
                <button onClick={handleSearch} className="bg-white text-neutral-800 px-4 py-3 rounded-md w-full md:w-auto">
                    Procurar
                </button>
            </div>
        </div>
    );
}
