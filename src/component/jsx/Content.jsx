import "../scss/Content.scss";
import ContentCard from "../jsx/ContentCard.jsx";

const contentData = [
    {
        img: "/content/cover6.png",
        episod: "Eps. 6",
        title: "Pandemic Becoming Endemic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "covid-19",
        tag2: "health",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        img: "/content/cover5.png",
        episod: "Eps. 5",
        title: "Tesla Autopilot Controversy",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "automation",
        tag2: "tech",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        img: "/content/cover4.png",
        episod: "Eps. 4",
        title: "Women's Rights? Is it alright?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "women’s rights",
        tag2: "",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        img: "/content/cover3.png",
        episod: "Eps. 3",
        title: "How to Deal with Self–Confidence",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "self-esteem",
        tag2: "health",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        img: "/content/cover2.png",
        episod: "Eps. 2",
        title: "Type of Social Classes of People",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "social class",
        tag2: "wealth",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        img: "/content/cover1.png",
        episod: "Eps. 1",
        title: "Are you a Perplexed Mind Person?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "mind-behaviour",
        tag2: "health",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
];

function Content() {
    const card = contentData.map((value, i) => (
        <ContentCard
            episod={value.episod}
            title={value.title}
            text={value.text}
            tag={value.tag}
            img={value.img}
            tag2={value.tag2}
            key={i}
            avatar2={value.avatar2}
            avatar1={value.avatar1}
        />
    ));

    return (
        <>
            <div className="content-card__container">{card}</div>
        </>
    );
}

export default Content;
