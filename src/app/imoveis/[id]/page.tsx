"use client"

import { useParams } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Calendar, ChevronRight, Home, MapPin, Maximize, Phone, Menu, X } from "lucide-react"
import { useState } from "react";

import { properties } from "@/data/imoveis"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { notFound } from "next/navigation";
import Similar from "@/components/Similar/Similar"

export default function PropertyDetailPage() {
    const params = useParams();
    const { id } = params;
    const property = properties.find((p) => p.id === id);

    const [menuOpen, setMenuOpen] = useState(false);

    if (!property) return notFound();

    return (
        <section className="flex-1 flex justify-center">
            <div className="container">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Link href="/" className="hover:text-foreground">
                        Início
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/properties" className="hover:text-foreground">
                        Imóveis
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-foreground">{property.title}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={property.imageUrl}
                            alt={property.title}
                            width={800}
                            height={600}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-[1fr_350px] gap-8">
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                                <Home className="h-4 w-4" />
                                <span>{property.type === "sale" ? "Venda" : "Aluguel"}</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                            <div className="flex items-center gap-1 text-muted-foreground mb-4">
                                <MapPin className="h-4 w-4" />
                                <span>{property.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <Bed className="h-5 w-5 text-muted-foreground" />
                                    <span>
                                        <strong>{property.bedrooms}</strong> Quartos
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Bath className="h-5 w-5 text-muted-foreground" />
                                    <span>
                                        <strong>{property.bathrooms}</strong> Banheiros
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Maximize className="h-5 w-5 text-muted-foreground" />
                                    <span>
                                        <strong>{property.area}</strong> m²
                                    </span>
                                </div>
                                {property.garageSpots && (
                                    <div className="flex items-center gap-2">
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
                                            className="h-5 w-5 text-muted-foreground"
                                        >
                                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                                            <circle cx="7" cy="17" r="2" />
                                            <path d="M9 17h6" />
                                            <circle cx="17" cy="17" r="2" />
                                        </svg>
                                        <span>
                                            <strong>{property.garageSpots}</strong> Vagas
                                        </span>
                                    </div>
                                )}
                                {property.yearBuilt && property.yearBuilt > 0 && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-muted-foreground" />
                                        <span>
                                            Construído em <strong>{property.yearBuilt}</strong>
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="text-3xl font-bold mb-6">
                                {property.type === "sale" ? "R$ " : "R$ "}
                                {property.price.toLocaleString("pt-BR")}
                                {property.type === "rent" ? "/mês" : ""}
                            </div>
                        </div>

                        <Tabs defaultValue="description">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="description">Descrição</TabsTrigger>
                                <TabsTrigger value="features">Características</TabsTrigger>
                                <TabsTrigger value="location">Localização</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="p-4 border rounded-md mt-2">
                                <p className="text-muted-foreground">{property.description}</p>
                            </TabsContent>
                            <TabsContent value="features" className="p-4 border rounded-md mt-2">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {(property.features || []).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
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
                                                className="h-5 w-5 text-primary"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="location" className="p-4 border rounded-md mt-2">
                                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                                    <p className="text-muted-foreground">Mapa da localização</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div>
                        {property.agent && (
                            <div className="bg-muted p-6 rounded-lg mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src={property.agent.avatar || "/placeholder.svg"}
                                        alt={property.agent.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{property.agent.name}</h3>
                                        <p className="text-sm text-muted-foreground">Corretor de Imóveis</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-muted-foreground" />
                                        <span>{property.agent.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
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
                                            className="h-5 w-5 text-muted-foreground"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        <span>{property.agent.email}</span>
                                    </div>
                                </div>
                                <button className="w-full mb-2">Entrar em Contato</button>
                                <button className="w-full">
                                    Agendar Visita
                                </button>
                            </div>
                        )}

                        <div className="bg-muted p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Interessado neste imóvel?</h3>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nome
                                    </label>
                                    <input
                                        id="name"
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Telefone
                                    </label>
                                    <input
                                        id="phone"
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                                        placeholder="Estou interessado neste imóvel e gostaria de mais informações."
                                    />
                                </div>
                                <button type="submit" className="w-full">
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Similar />
            </div>
        </section >
    );
}