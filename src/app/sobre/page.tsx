'use client'

import { useState } from "react";
import Link from "next/link"
import { Menu, X, CheckCircle, Users } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
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
            <main className="flex-1">
                <section className="py-12 md:py-24 px-10 md:px-0 bg-muted flex justify-center">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Sobre a Habitta</h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Somos a imobiliária que mais cresce no Brasil, com foco em proporcionar a melhor experiência na
                                    compra, venda e aluguel de imóveis.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    Fundada em 2010, a Habitta nasceu com o propósito de revolucionar o mercado imobiliário brasileiro,
                                    trazendo tecnologia e inovação para um setor tradicionalmente conservador. Hoje, contamos com mais de
                                    500 colaboradores e 50 unidades espalhadas pelo país.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-[#171717] text-white py-2 px-3 rounded-sm">Conheça Nossa Equipe</button>
                                    <button className="bg-white text-black py-2 px-3 rounded-sm border border-gray-300">Fale Conosco</button>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=400&width=600&text=Equipe+ImóveisJá"
                                    alt="Equipe Habitta"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-24 px-10 md:px-0 flex justify-center">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Nossa Missão, Visão e Valores</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Conheça os princípios que norteiam nosso trabalho e nos fazem ser referência no mercado imobiliário.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-muted p-6 rounded-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Missão</h3>
                                <p className="text-muted-foreground">
                                    Facilitar a realização do sonho da casa própria, oferecendo soluções imobiliárias personalizadas e de
                                    qualidade, com transparência e excelência no atendimento.
                                </p>
                            </div>
                            <div className="bg-muted p-6 rounded-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visão</h3>
                                <p className="text-muted-foreground">
                                    Ser reconhecida como a melhor e mais inovadora empresa do setor imobiliário no Brasil, referência em
                                    qualidade, tecnologia e satisfação do cliente.
                                </p>
                            </div>
                            <div className="bg-muted p-6 rounded-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Valores</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Ética e transparência</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Compromisso com o cliente</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Inovação e tecnologia</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Responsabilidade social</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Valorização das pessoas</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-24 px-10 md:px-0 bg-muted flex justify-center">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Conheça a trajetória da ImóveisJá e como nos tornamos referência no mercado imobiliário brasileiro.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <h3 className="text-xl font-bold mb-2">2010 - O início</h3>
                                    <p className="text-muted-foreground mb-4">
                                        A Habitta foi fundada por três amigos que identificaram a necessidade de modernizar o mercado
                                        imobiliário brasileiro. Com apenas uma pequena sala comercial e 5 colaboradores, demos os primeiros
                                        passos para transformar o setor.
                                    </p>
                                </div>
                                <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500&text=Fundação+2010"
                                        alt="Fundação da ImóveisJá"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/habitta.png"
                                        alt="Expansão da ImóveisJá"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">2015 - Expansão</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Após 5 anos de crescimento constante, a Habitta já contava com 10 unidades em diferentes estados e
                                        mais de 100 colaboradores. Neste ano, lançamos nossa plataforma digital, revolucionando a forma de
                                        buscar imóveis.
                                    </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <h3 className="text-xl font-bold mb-2">2020 - Consolidação</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Mesmo em um ano desafiador, a Habitta se consolidou como líder do setor, com 30 unidades e mais de
                                        300 colaboradores. Implementamos tecnologias de ponta, como visitas virtuais e assinatura digital de
                                        contratos.
                                    </p>
                                </div>
                                <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500&text=Consolidação+2020"
                                        alt="Consolidação da ImóveisJá"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500&text=Consolidação+2020"
                                        alt="ImóveisJá hoje"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Hoje - Liderança</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Atualmente, a Habitta é a maior rede de imobiliárias do Brasil, com 50 unidades e mais de 500
                                        colaboradores. Nosso aplicativo é o mais baixado do setor e nossa plataforma recebe milhões de
                                        visitas mensais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-24 px-10 md:px-0 flex justify-center">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Conheça os profissionais que fazem da Habbita a melhor imobiliária do Brasil.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((index) => (
                                <div key={index} className="bg-muted rounded-lg overflow-hidden">
                                    <div className="relative h-[300px]">
                                        <Image
                                            src={`/placeholder.svg?height=300&width=300&text=Executivo+${index}`}
                                            alt={`Executivo ${index}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold">Nome do Executivo {index}</h3>
                                        <p className="text-muted-foreground mb-2">Cargo do Executivo</p>
                                        <div className="flex justify-center space-x-2">
                                            <a href="#" className="text-muted-foreground hover:text-foreground">
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
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect width="4" height="12" x="2" y="9" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            </a>
                                            <a href="#" className="text-muted-foreground hover:text-foreground">
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
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <button className="">Ver Toda a Equipe</button>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-24 px-10 md:px-10 bg-muted flex justify-center">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Junte-se à Nossa Equipe</h2>
                                <p className="text-muted-foreground mb-6">
                                    Estamos sempre em busca de talentos que compartilhem nossa paixão pelo mercado imobiliário e nosso
                                    compromisso com a excelência.
                                </p>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Users className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Ambiente Colaborativo</h3>
                                            <p className="text-muted-foreground">
                                                Trabalhe em um ambiente que valoriza a colaboração e o trabalho em equipe.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                                                className="h-6 w-6 text-primary"
                                            >
                                                <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                                                <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                                <path d="M12 18v-6" />
                                                <path d="M9 15h6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Desenvolvimento Profissional</h3>
                                            <p className="text-muted-foreground">
                                                Invista em sua carreira com nossos programas de treinamento e desenvolvimento.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                                                className="h-6 w-6 text-primary"
                                            >
                                                <path d="M12 2v20" />
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Remuneração Competitiva</h3>
                                            <p className="text-muted-foreground">
                                                Oferecemos salários competitivos e um pacote completo de benefícios.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-[#171717] text-white py-2 px-3 rounded-sm">Ver Vagas Disponíveis</button>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=400&width=600&text=Trabalhe+Conosco"
                                    alt="Trabalhe Conosco"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}