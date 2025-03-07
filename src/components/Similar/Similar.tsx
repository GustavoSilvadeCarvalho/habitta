import { properties } from "@/data/imoveis";
import { PropertyCard } from "../property-card/property-card";
import Link from "next/link";

export default function Similar() {
    return (
        <div className="container mx-auto px-5 pt-24 mb-8">
            <div>
                <h2 className="text-3xl font-medium mb-8 text-center">Imoveis Semelhantes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {properties.slice(0, 3).map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/imoveis"><button className="bg-[#171717] text-white py-2 px-3 rounded hover:bg-[#a1a1a1] transition">ver todos</button></Link>
            </div>
        </div>
    )
}