import Image from "next/image"

export default function WhyCard() {
    const cards = [
        {
            id: 1,
            image: "/clipboard.svg",
            title: "Ampla opções de propriedades",
            description: "Oferecemos assistência jurídica especializada para todos os assuntos relacionados à propriedade",
        },
        {
            id: 2,
            image: "/house.svg",
            title: "Compre ou alugue casas",
            description: "Vendemos sua casa pelo preço de mercado e muito rapidamente também",
        },
        {
            id: 3,
            image: "/shield.svg",
            title: "Confiado por milhares",
            description: "Oferecemos consultoria gratuita para obter um empréstimo para sua nova casa",
        }
    ]


    return (
        <div className="flex flex-wrap justify-center gap-6">
            {cards.map(({ id, image, title, description }) => (
                <div
                    key={id}
                    className="relative w-[450px] max-w-sm rounded-xl overflow-hidden flex"
                >
                    <div className="relative rounded-l w-full flex flex-col items-center text-center gap-5 bg-white p-8">
                        <div className="bg-muted rounded-full p-2">
                            <Image src={image} alt="house" width={50} height={50} />
                        </div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}