export default function FindCard() {
    const cards = [
        {
            id: 1,
            image: "/newyork.jpg",
            title: "New York",
            description: "8 Imoveis"
        },
        {
            id: 2,
            image: "/chicago.jpg",
            title: "Chicago",
            description: "4 Imoveis"
        },
        {
            id: 3,
            image: "/losangeles.jpg",
            title: "Los Angeles",
            description: "6 Imoveis"
        },
        {
            id: 4,
            image: "/miami.jpg",
            title: "Miami",
            description: "3 Imoveis"
        },
        {
            id: 5,
            image: "/florida.jpg",
            title: "Florida",
            description: "5 Imoveis"
        }

    ]


    return (
        <div className="flex flex-wrap justify-center gap-6 p-8 pb-0">
            {cards.map(({ id, image, title, description }) => (
                <div
                    key={id}
                    className="relative w-[250px] max-w-sm h-[300px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center flex items-start p-4 before:absolute before:inset-0 before:bg-black before:opacity-50"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="relative p-4 rounded-lg text-white w-full">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-gray-300">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}