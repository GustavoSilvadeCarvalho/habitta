import WhyCard from "../WhyCard/whyCard";

export default function WhySection() {
    return (
        <div className="bg-muted">
            <div className="flex flex-col items-center justify-center text-center pt-16">
                <h2 className="text-3xl">Why You Should Work With Us</h2>
                <p className="text-lg">We are a team of professionals who are d for all related property matters.</p>
            </div>
            <WhyCard />
        </div>
    )
}