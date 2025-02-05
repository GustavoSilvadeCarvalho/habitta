import FindCard from "../FindCard/FindCard";

export default function FindSection() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-44">
                <h2 className="text-3xl">Encontre seu Proximo Imovel</h2>
                <p className="text-lg">Encontre o imovel perfeito para você</p>
            </div>
            <FindCard />
        </div>
    )
}