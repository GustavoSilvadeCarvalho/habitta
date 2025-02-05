import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
    {
        image: "/livingroom.jpeg",
        title: "Apartamento de Luxo em NY",
        details: ["3 Quartos", "4 Banheiros", "250m²"],
        value: "R$ 100.000.000"
    },
    {
        image: "/livingroom2.jpeg",
        title: "Apartamento Luxuoso em Los Angeles",
        details: ["2 Quartos", "3 Banheiros", "190m²"],
        value: "R$ 40.500.000"
    },
    {
        image: "/livingroom3.jpeg",
        title: "Apartamento Moderno em Paris",
        details: ["2 Quartos", "3 Banheiros", "123m²"],
        value: "R$ 10.000.000"
    },
]

export function Carousell() {
    return (
        <Carousel className="w-screen h-full text-white">
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="h-[760px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="flex flex-col justify-center items-center h-full bg-black/30">
                                <div className="flex space-x-5">
                                    {slide.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                                <h4 className="text-4xl mt-4">{slide.title}</h4>
                                <h3 className="mt-4">{slide.value}</h3>
                                <button className="bg-white text-black py-2 px-4 mt-4 rounded-md">Ver Mais</button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}