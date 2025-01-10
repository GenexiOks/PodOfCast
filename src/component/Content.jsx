import "./Content.scss";
import ContentCard from "./ContentCard";

const contentData = [
    {
        episod: "Eps. 6",
        title: "Pandemic Becoming Endemic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "covid-19",
        tag2: "health",
        avatar1: "/content/avatar/avatar1.png",
        avatar2: "/content/avatar/avatar2.png",
    },
    {
        episod: "Eps. 6",
        title: "Pandemic Becoming Endemic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
        tag: "covid-19",
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
