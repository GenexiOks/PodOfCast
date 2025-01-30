import "../scss/Pricing.scss";
import PricingCard from "./PricingCard.jsx";

function Pricing() {
    const cards = [
        {
            title: "Member",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$9.99",
            features: ["Exclusive Content", "5% Discount on Merch", "Join the Community", "Livestreaming Access"],
        },
        {
            title: "Family",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$14.99",
            features: ["Everything in Tier 1", "Free tickets to Events", "Limited Edition Merch", "Promote your Product", "Request Topic"],
            popular: true,
            advantages: true,
        },
        {
            title: "Official",
            description: "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
            price: "$29.99",
            features: [
                "Everything in Tier 2",
                "Exclusive Badge on Livestreaming",
                "Become an Official Sponsor",
                "Early Access to All Episodes",
                "Free Stikers and Merch",
            ],
            advantages: true,
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
