'use client'

import { useState } from "react";
import Link from "next/link"
import { Menu, X } from "lucide-react";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function ContatoPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="sticky top-0 z-10 w-full flex justify-between items-center px-8 md:px-16 py-4 bg-white/70 backdrop-blur">
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
            <ContactSection />
        </div>
    )
}