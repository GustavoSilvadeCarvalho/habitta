import WhyCard from "../WhyCard/whyCard";

export default function WhySection() {
    return (
        <div className="bg-muted py-8">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl text-medium mb-8">Por que escolher a Habitta</h2>
                <p className="text-lg mb-8 text-gray-500">Somos a imobiliária que mais cresce no país, com milhares de clientes satisfeitos</p>
            </div>
            <WhyCard />
        </div>
    )
}