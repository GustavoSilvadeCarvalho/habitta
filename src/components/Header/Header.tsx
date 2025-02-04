export default function Header() {
    return (
        <header className="absolute z-10 w-full flex justify-between items-center px-16 pt-8">
            <div>
                <h4>Habitta</h4>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-10">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="border px-4 py-2">Sign In</button>
            </div>
        </header>
    )
}