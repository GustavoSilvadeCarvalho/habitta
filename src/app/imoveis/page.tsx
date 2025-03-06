'use client'

import { Filter } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card/property-card"

import { properties } from "@/data/imoveis"

import { useSearchParams } from "next/navigation"

export default function Imoveis() {
    const searchParams = useSearchParams()
    const [menuOpen, setMenuOpen] = useState(false);
    const [propertyType, setPropertyType] = useState<string>(searchParams.get("type") || "")
    const [filteredProperties, setFilteredProperties] = useState(properties)
    const [totalProperties, setTotalProperties] = useState(properties.length)
    const [bedrooms, setBedrooms] = useState<number | null>(null)
    const [bathrooms, setBathrooms] = useState<number | null>(null)
    const [sortOption, setSortOption] = useState<string>("newest")
    const [location, setLocation] = useState<string>(searchParams.get("location") || "")
    const [minPrice, setMinPrice] = useState<number | "">("")
    const [maxPrice, setMaxPrice] = useState<number | "">("")

    useEffect(() => {
        const typeMap: { [key in "casa" | "apartamento" | "terreno" | "comercial" | "mansão"]: string[] } = {
            casa: ["Casa"],
            apartamento: ["Apartamento", "Cobertura"],
            terreno: ["Terreno"],
            comercial: ["Comercial"],
            mansão: ["Mansão"],
        }

        let filtered = properties.filter((property) => {
            const typeMatch =
                propertyType === "" ||
                (typeMap[propertyType as keyof typeof typeMap] &&
                    typeMap[propertyType as keyof typeof typeMap].some((keyword) => property.title.toLowerCase().includes(keyword.toLowerCase())))

            const bedroomsMatch = bedrooms === null || property.bedrooms >= bedrooms
            const bathroomsMatch = bathrooms === null || property.bathrooms >= bathrooms

            return typeMatch && bedroomsMatch && bathroomsMatch
        })

        switch (sortOption) {
            case "price-asc":
                filtered.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                filtered.sort((a, b) => b.price - a.price)
                break
            case "area-asc":
                filtered.sort((a, b) => a.area - b.area)
                break
            case "area-desc":
                filtered.sort((a, b) => b.area - a.area)
                break
            case "newest":
            default:
                filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
                break
        }

        if (location) {
            filtered = filtered.filter((property) =>
                property.location.toLowerCase().includes(location.toLowerCase())
            )
        }

        if (minPrice !== "") {
            filtered = filtered.filter((property) => property.price >= minPrice)
        }

        // Filtrar por preço máximo
        if (maxPrice !== "") {
            filtered = filtered.filter((property) => property.price <= maxPrice)
        }

        setFilteredProperties(filtered)
        setTotalProperties(filtered.length)
    }, [propertyType, bedrooms, bathrooms, sortOption, location, minPrice, maxPrice])

    const handleBedroomSelection = (num: number) => {
        setBedrooms((prev) => (prev === num ? null : num))
    }

    const handleBathroomSelection = (num: number) => {
        setBathrooms((prev) => (prev === num ? null : num))
    }

    const clearFilters = () => {
        setPropertyType("")
        setLocation("")
        setBedrooms(null)
        setBathrooms(null)
        setSortOption("newest")
        setMinPrice("")
        setMaxPrice("")
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <header className="sticky top-0 z-10 w-full flex justify-between items-center px-8 md:px-16 py-4 bg-white">
                <div>
                    <h4 className="text-xl font-bold">Habitta</h4>
                </div>

                <nav className="md:flex hidden">
                    <ul className="flex space-x-10 text-lg">
                        <Link href="/"><li className="cursor-pointer">Início</li></Link>
                        <Link href="/imoveis"><li className="cursor-pointer">Imóveis</li></Link>
                        <Link href="/sobre"><li className="cursor-pointer">Sobre</li></Link>
                        <Link href="/contato"><li className="cursor-pointer">Contato</li></Link>
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <button className="border px-4 py-2 rounded-md text-lg">Sign In</button>
                </div>

                <button
                    className="md:hidden block"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {menuOpen && (
                    <div className="fixed inset-0 top-0 right-0 w-full h-full bg-white p-6 flex flex-col items-center gap-6 md:hidden">
                        <button
                            className="absolute top-4 right-8"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>
                        <Link href="/"><li className="cursor-pointer text-lg list-none">Início</li></Link>
                        <Link href="/imoveis"><li className="cursor-pointer text-lg list-none">Imóveis</li></Link>
                        <Link href="/sobre"><li className="cursor-pointer text-lg list-none">Sobre</li></Link>
                        <Link href="/contato"><li className="cursor-pointer text-lg list-none">Contato</li></Link>
                        <button className="border px-4 py-2 rounded-md text-lg w-full">Sign In</button>
                    </div>
                )}
            </header>
            <main className="flex-1">
                <div className="container py-8">
                    <h1 className="text-3xl font-bold mb-8">Imóveis Disponíveis</h1>
                    <div className="grid md:grid-cols-[300px_1fr] gap-8">
                        <div className="bg-muted p-6 rounded-lg h-fit">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">Filtros</h2>
                                <Filter className="h-5 w-5" />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Tipo de Imóvel</label>
                                    <select
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value as "casa" | "apartamento" | "terreno" | "comercial" | "mansão" | "")}
                                    >
                                        <option value="">Todos os tipos</option>
                                        <option value="casa">Casa</option>
                                        <option value="apartamento">Apartamento</option>
                                        <option value="terreno">Terreno</option>
                                        <option value="comercial">Comercial</option>
                                        <option value="mansão">Mansão</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Localização</label>
                                    <input
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                        id="location"
                                        placeholder="Cidade, Estado"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Preço</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                            placeholder="Mínimo"
                                            type="number"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : "")} />
                                        <input
                                            className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                            placeholder="Máximo"
                                            type="number"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Quartos</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <Button
                                                key={num}
                                                variant={bedrooms === num ? "default" : "outline"}
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => handleBedroomSelection(num)}
                                            >
                                                {num === 5 ? "5+" : num}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Banheiros</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4].map((num) => (
                                            <Button
                                                key={num}
                                                variant={bathrooms === num ? "default" : "outline"}
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => handleBathroomSelection(num)}
                                            >
                                                {num === 4 ? "4+" : num}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Área (m²)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input placeholder="Mínima" />
                                        <input placeholder="Máxima" />
                                    </div>
                                </div>
                                <Button className="w-full" onClick={clearFilters}>
                                    Remover Filtros
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {propertyType && (
                                    <span className="rounded-full bg-gray-200    px-2 py-1">
                                        Tipo: {propertyType}
                                        <button onClick={() => setPropertyType("")} className="ml-2 text-xs">
                                            &times;
                                        </button>
                                    </span>
                                )}
                                {bedrooms !== null && (
                                    <span className="rounded-full bg-gray-200 px-2 py-1">
                                        Quartos: {bedrooms}+
                                        <button onClick={() => setBedrooms(null)} className="ml-2 text-xs">
                                            &times;
                                        </button>
                                    </span>
                                )}
                                {bathrooms !== null && (
                                    <span className="rounded-full bg-gray-200 px-2 py-1">
                                        Banheiros: {bathrooms}+
                                        <button onClick={() => setBathrooms(null)} className="ml-2 text-xs">
                                            &times;
                                        </button>
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-muted-foreground">Mostrando {totalProperties} imóveis</p>
                                <select className="h-10 px-3 rounded-md border border-input bg-background" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                    <option value="newest">Mais recentes</option>
                                    <option value="price-asc">Menor preço</option>
                                    <option value="price-desc">Maior preço</option>
                                    <option value="area-asc">Menor área</option>
                                    <option value="area-desc">Maior área</option>
                                </select>
                            </div>
                            {filteredProperties.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProperties.map((property) => (
                                        <PropertyCard key={property.id} {...property} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-xl font-medium">Nenhum imóvel encontrado com os filtros selecionados.</p>
                                    <p className="text-muted-foreground mt-2">Tente ajustar seus critérios de busca.</p>
                                </div>
                            )}
                            {filteredProperties.length > 0 && (
                                <div className="flex justify-center mt-8">
                                    <div className="flex">
                                        <Button variant="outline" size="icon" disabled>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4"
                                            >
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                        </Button>
                                        <Button variant="outline" className="rounded-none bg-primary text-primary-foreground">
                                            1
                                        </Button>
                                        <Button variant="outline" className="rounded-none">
                                            2
                                        </Button>
                                        <Button variant="outline" className="rounded-none">
                                            3
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}