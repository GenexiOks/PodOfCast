import "./Pricing.scss";
import PricingCard from "./PricingCard.jsx";

function Pricing() {
    const cards = [
        {
            title: "Member",
            description: "Exclusive content, 5% discount on merchandise, community access, livestreaming access",
            price: "$9.99 per month",
            features: ["Exclusive content", "5% discount on merchandise", "Community access", "Livestreaming access"],
        },
        {
            title: "Family",
            description: "Everything in the Member plan plus free tickets to events, limited edition merchandise, product promotion, request topics",
            price: "$14.99 per month",
            features: ["Free tickets to events", "Limited edition merchandise", "Product promotion", "Request topics"],
            popular: true,
        },
        {
            title: "Official",
            description:
                "Everything in the Family plan plus exclusive badge on livestreaming, official sponsorship, early access to all episodes, free stickers and merchandise",
            price: "$29.99 per month",
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
