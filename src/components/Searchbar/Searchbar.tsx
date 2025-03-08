'use client'

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react";

export default function Searchbar() {
    const [propertyType, setPropertyType] = useState("")
    const [location, setLocation] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const searchParams = new URLSearchParams()
    if (propertyType) searchParams.append("type", propertyType)
    if (location) searchParams.append("location", location)

    const searchUrl = `/imoveis?${searchParams.toString()}`

    return (
        <div className="absolute z-10 w-[90%] max-w-[1000px] md:top-[710px] top-[530px] left-1/2 transform -translate-x-1/2 bg-neutral-950 text-white px-6 py-4 rounded-md flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500 ml-1">Tipo de imóvel</p>
                <div className="relative min-w-[120px] w-full">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full bg-transparent text-neutral-300 md:border-none border-b border-neutral-700 focus:outline-none flex justify-between items-center py-2"
                    >
                        <span>{propertyType || "Todos"}</span>
                        <ChevronDown
                            className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`absolute w-[120px] mt-1 bg-neutral-900 border border-neutral-700 rounded-md shadow-md transition-all duration-300 overflow-hidden z-10 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                            }`}
                    >
                        <ul className="py-1">
                            {[
                                { value: "", label: "Todos" },
                                { value: "casa", label: "Casa" },
                                { value: "apartamento", label: "Apartamento" },
                                { value: "terreno", label: "Terreno" },
                                { value: "comercial", label: "Comercial" },
                                { value: "mansão", label: "Mansão" },
                            ].map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => {
                                        setPropertyType(option.value);
                                        setIsOpen(false);
                                    }}
                                    className="px-3 py-2 text-neutral-300 hover:bg-neutral-800 cursor-pointer"
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            <div className="flex flex-col w-full md:w-auto mr-auto">
                <p className="text-neutral-500">Localização</p>
                <input
                    type="text"
                    placeholder="Digite..."
                    className="bg-transparent placeholder-white"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <hr className="hidden md:block w-px h-14 bg-gray-300 border-none" />

            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4">

                <Link href={searchUrl} passHref>
                    <button className="bg-white hover:bg-neutral-600 text-neutral-800 px-4 py-3 rounded-md w-full md:w-auto">
                        Procurar
                    </button>
                </Link>
            </div>
        </div>
    );
}
