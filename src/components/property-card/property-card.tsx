import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, MapPin, Maximize } from "lucide-react";

interface PropertyCardProps {
    id: string;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
    type: "sale" | "rent";
    featured?: boolean;
}

export function PropertyCard({
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    imageUrl,
    type,
    featured = false,
}: PropertyCardProps) {
    return (
        <div className={`rounded-lg overflow-hidden border bg-white ${featured ? "shadow-md" : ""}`}>
            <div className="relative">
                <Image
                    src={imageUrl || "/placeholder.svg?height=200&width=300"}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                />
                <span
                    className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded-xl ${type === "sale" ? "bg-green-600" : "bg-blue-600"
                        }`}
                >
                    {type === "sale" ? "Venda" : "Aluguel"}
                </span>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-1 text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{location}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
                <p className="text-xl font-bold mb-4">
                    R$ {price.toLocaleString("pt-BR")} {type === "rent" ? "/mês" : ""}
                </p>
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{bedrooms} quartos</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{bathrooms} banheiros</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{area} m²</span>
                    </div>
                </div>
                <Link href={`/properties/${id}`} className="block">
                    <button className="w-full bg-[#171717] text-white py-2 rounded hover:bg-blue-700 transition">
                        Ver Detalhes
                    </button>
                </Link>
            </div>
        </div>
    );
}
