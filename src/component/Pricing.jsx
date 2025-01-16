import "./Pricing.scss";
import PricingCard from "./PricingCard.jsx";

function Pricing() {
    const cards = [
        {
            title: "Member",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$9.99",
            features: ["Exclusive content", "5% discount on merchandise", "Community access", "Livestreaming access"],
        },
        {
            title: "Family",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$14.99",
            features: ["Free tickets to events", "Limited edition merchandise", "Product promotion", "Request topics"],
            popular: true,
        },
        {
            title: "Official",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$29.99",
            features: ["Exclusive badge on livestreaming", "Official sponsorship", "Early access to all episodes", "Free stickers and merchandise"],
        },
    ];

    return (
        <>
            <div className="pricing-cards">
                {cards.map((card, index) => (
                    <PricingCard key={index} {...card} />
                ))}
            </div>
        </>
    );
}

export default Pricing;
