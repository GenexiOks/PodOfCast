import "../scss/News.scss";
import NewsCard from "./NewsCard.jsx";

function News() {
    const newsData = [
        {
            photo: "/blog/img2.png",
            title: "PODCAST",
            name: "Setup your own podcast",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
            tags: ["business", "startup"],
            date: "Sep 14, 2021",
        },
        {
            photo: "./blog/img.png",
            title: "TIPS & TRICK",
            name: "Doodle artwork 101",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
            tags: ["art", "creative", "tips and trick"],
            date: "Sep 12, 2021",
        },
    ];

    return (
        <>
            <div className="news">
                {newsData.map((card, index) => (
                    <NewsCard key={index} {...card} />
                ))}
            </div>
        </>
    );
}

export default News;
