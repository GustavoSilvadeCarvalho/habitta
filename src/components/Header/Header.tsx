export default function Header() {
    return (
        <header className="absolute z-10 w-full flex justify-between items-center px-16 pt-8 text-white">
            <div>
                <h4 className="text-xl">Habitta</h4>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-10 text-lg">
                        <a href="#"><li>Início</li></a>
                        <a href="/imoveis"><li>Imóveis</li></a>
                        <a href=""><li>Sobre</li></a>
                        <a href=""><li>Contato</li></a>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="border px-4 py-2 rounded-md text-lg">Sign In</button>
            </div>
        </header>
    )
}