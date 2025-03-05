import FindCard from "../FindCard/FindCard";

export default function FindSection() {
    return (
        <div className="mt-32 mb-16">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center">Encontre seu Proximo Imovel</h2>
                <p className="text-lg">Encontre o imovel perfeito para você</p>
            </div>
            <FindCard />
        </div>
    )
}