'use client'

import { Filter } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card/property-card"

import { properties } from "@/data/imoveis"

import { useSearchParams } from "next/navigation"

import { Suspense } from 'react'

export default function Imoveis() {
    const [isOpen, setIsOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
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
    const [minArea, setMinArea] = useState<string>("")
    const [maxArea, setMaxArea] = useState<string>("")
    const [transactionType, setTransactionType] = useState<"sale" | "rent" | "">("")

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

        if (maxPrice !== "") {
            filtered = filtered.filter((property) => property.price <= maxPrice)
        }

        if (minArea) {
            filtered = filtered.filter((property) => property.area >= Number.parseInt(minArea))
        }

        if (maxArea) {
            filtered = filtered.filter((property) => property.area <= Number.parseInt(maxArea))
        }

        if (transactionType) {
            filtered = filtered.filter((property) => property.type === transactionType)
        }

        setFilteredProperties(filtered)
        setTotalProperties(filtered.length)
    }, [propertyType, bedrooms, bathrooms, sortOption, location, minPrice, maxPrice, minArea, maxArea, transactionType,])

    const handleBedroomSelection = (num: number) => {
        setBedrooms((prev) => (prev === num ? null : num))
    }

    const handleBathroomSelection = (num: number) => {
        setBathrooms((prev) => (prev === num ? null : num))
    }

    const toggleTransactionType = (type: "sale" | "rent") => {
        setTransactionType((prev) => (prev === type ? "" : type))
    }

    const clearFilters = () => {
        setPropertyType("")
        setLocation("")
        setBedrooms(null)
        setBathrooms(null)
        setSortOption("newest")
        setMinPrice("")
        setMaxPrice("")
        setMinArea("")
        setMaxArea("")
        setTransactionType("")
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <header className="sticky top-0 z-20 w-full flex justify-between items-center px-8 md:px-16 py-4 bg-white/70 backdrop-blur">
                <div>
                    <Link href="/"><h4 className="text-xl font-bold">Habitta</h4></Link>
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
                    <h1 className="text-3xl font-bold mb-8 text-center">Imóveis Disponíveis</h1>
                    <Suspense fallback={<div>Carregando...</div>}>
                        <div className="grid md:grid-cols-[300px_1fr] gap-8">
                            <div className="bg-muted p-6 rounded-lg h-fit">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">Filtros</h2>
                                    <Filter className="h-5 w-5" />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-6">
                                        <div className="relative">
                                            <label className="text-sm font-medium mb-1 block">Tipo de Imóvel</label>

                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="w-full h-10 px-3 rounded-md border border-input bg-background flex items-center justify-between"
                                            >
                                                {propertyType
                                                    ? propertyType.charAt(0).toUpperCase() + propertyType.slice(1)
                                                    : "Todos os tipos"}
                                                <ChevronDown
                                                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <div
                                                className={`absolute w-full mt-1 bg-white border rounded-md shadow-md overflow-hidden transition-all duration-300 z-10 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                                    }`}
                                            >
                                                <ul className="py-1">
                                                    {[
                                                        { value: "", label: "Todos os tipos" },
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
                                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            {option.label}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-sm font-medium mb-1 block">Tipo de Transação</label>
                                        <div className="flex gap-2">
                                            <Button
                                                variant={transactionType === "sale" ? "default" : "outline"}
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => toggleTransactionType("sale")}
                                            >
                                                Venda
                                            </Button>
                                            <Button
                                                variant={transactionType === "rent" ? "default" : "outline"}
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => toggleTransactionType("rent")}
                                            >
                                                Aluguel
                                            </Button>
                                        </div>
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
                                            <input
                                                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                                placeholder="Mínima"
                                                type="number"
                                                value={minArea}
                                                onChange={(e) => setMinArea(e.target.value)}
                                            />
                                            <input
                                                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                                placeholder="Máxima"
                                                type="number"
                                                value={maxArea}
                                                onChange={(e) => setMaxArea(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <Button className="w-full hover:bg-[#a1a1a1]" onClick={clearFilters}>
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
                                <div className="flex justify-between items-center mb-6 relative z-10">
                                    <p className="text-muted-foreground">Mostrando {totalProperties} imóveis</p>
                                    <div className="relative">
                                        <label className="text-sm font-medium mb-1 block">Ordenar por</label>
                                        <button
                                            onClick={() => setSortOpen(!sortOpen)}
                                            className="w-full h-10 px-3 rounded-md border border-input bg-background flex items-center justify-between"
                                        >
                                            {sortOption === "newest"
                                                ? "Mais recentes"
                                                : sortOption === "price-asc"
                                                    ? "Menor preço"
                                                    : sortOption === "price-desc"
                                                        ? "Maior preço"
                                                        : sortOption === "area-asc"
                                                            ? "Menor área"
                                                            : "Maior área"}
                                            <ChevronDown
                                                className={`w-4 h-4 ml-2 transition-transform ${sortOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {sortOpen && (
                                            <div
                                                className="absolute w-full mt-1 bg-white border rounded-md shadow-md overflow-hidden transition-all duration-300 z-10"
                                            >
                                                <ul className="py-1">
                                                    {[
                                                        { value: "newest", label: "Mais recentes" },
                                                        { value: "price-asc", label: "Menor preço" },
                                                        { value: "price-desc", label: "Maior preço" },
                                                        { value: "area-asc", label: "Menor área" },
                                                        { value: "area-desc", label: "Maior área" },
                                                    ].map((option) => (
                                                        <li
                                                            key={option.value}
                                                            onClick={() => {
                                                                setSortOption(option.value);
                                                                setSortOpen(false);
                                                            }}
                                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            {option.label}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
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
                            </div>
                        </div>
                    </Suspense>
                </div>
            </main>
        </div>
    )
}