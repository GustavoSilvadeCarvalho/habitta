import Image from "next/image"

export default function WhyCard() {
    const cards = [
        {
            id: 1,
            image: "/clipboard.svg",
            title: "Wide Range of Properties",
            description: "We offer expert legal help for all related property matters.",
        },
        {
            id: 2,
            image: "/house.svg",
            title: "Buy or rent homes",
            description: "We sell your home at the market price and very quickly as well.",
        },
        {
            id: 3,
            image: "/shield.svg",
            title: "Trusted by Thousands",
            description: "We offer you free consultancy to get a loan for your new home.",
        }
    ]


    return (
        <div className="flex flex-wrap justify-center gap-6 p-8">
            {cards.map(({ id, image, title, description }) => (
                <div
                    key={id}
                    className="relative w-[450px] max-w-sm h-[300px] rounded-xl overflow-hidden flex p-4"
                >
                    <div className="relative p-4 rounded-l w-full flex flex-col items-center text-center gap-5">
                        <Image src={image} alt="house" width={50} height={50} />
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}