export default function ContactSection() {
    return (
        <section className="flex-1 px-10 md:px-0 flex justify-center">
            <div className="container py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="bg-muted p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
                                <div className="space-y-4">
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
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Telefone</h3>
                                            <p className="text-muted-foreground">(11) 99999-9999</p>
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
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-muted-foreground">contato@habitta.com.br</p>
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
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Endereço</h3>
                                            <p className="text-muted-foreground">Av. Paulista, 1000, São Paulo - SP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-semibold mb-4">Horário de Funcionamento</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Segunda - Sexta</span>
                                            <span>9:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sábado</span>
                                            <span>9:00 - 13:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Domingo</span>
                                            <span>Fechado</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-semibold mb-4">Redes Sociais</h3>
                                    <div className="flex space-x-4">
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
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
                        </div>
                        <div>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Nome
                                        </label>
                                        <input className="px-3 py-2 border rounded-lg border-gray-300" id="name" placeholder="Seu nome completo" />
                                    </div>
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input className="px-3 py-2 border rounded-lg border-gray-300" id="email" type="email" placeholder="seu@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Telefone
                                    </label>
                                    <input className="px-3 py-2 border rounded-lg border-gray-300" id="phone" placeholder="(00) 00000-0000" />
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Assunto
                                    </label>
                                    <input className="px-3 py-2 border rounded-lg border-gray-300" id="subject" placeholder="Assunto da mensagem" />
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Mensagem
                                    </label>
                                    <textarea className="px-3 py-2 border rounded-lg border-gray-300 h-36" id="message" placeholder="Sua mensagem" />
                                </div>
                                <button type="submit" className="w-full bg-[#171717] text-white py-2 rounded-lg">
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}