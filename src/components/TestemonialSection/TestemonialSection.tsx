import Image from "next/image"

import { testimonials } from "@/data/imoveis"

export default function TestimonialSection() {
    return (
        <section className="py-16 container w-full mx-auto px-5">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
                <p className="text-muted-foreground text-center max-w-2xl">
                    A satisfação dos nossos clientes é a nossa maior recompensa
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-muted rounded-lg p-6 transform transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-lg"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="font-semibold">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="italic">{testimonial.content}</p>
                        <div className="flex mt-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5 text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}