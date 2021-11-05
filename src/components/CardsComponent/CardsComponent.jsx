import CardComponent from "./CardComponent/CardComponent";
import './CardsComponent.css';
import { useState } from "react";
import exercise from "../../assets/images/icon-exercise.svg";
import play from "../../assets/images/icon-play.svg";
import selfCare from "../../assets/images/icon-self-care.svg";
import social from "../../assets/images/icon-social.svg";
import study from "../../assets/images/icon-study.svg";
import work from "../../assets/images/icon-work.svg";

const CardsComponent = ({cardInfo}) => {
    const imagesTop = [work, play, study];
    const imagesBottom = [exercise, social, selfCare];

    const [work, setWork] = useState(cardInfo);
    const [play, setPlay] = useState(cardInfo);
    const [study, setStudy] = useState(cardInfo);
    const [exercise, setExercise] = useState(cardInfo);
    const [social, setSocial] = useState(cardInfo);
    const [selfCare, setSelfCare] = useState(cardInfo);

    return (
        <div className="cardComponentWrapper">
            <div>
                {imagesTop.map((image) => {
                    <CardComponent
                        timeName="work"
                        imageSrc={work.times.image}
                        time={work.times.weekly}
                        frame='Day'
                    />
                })}
            </div>
            <div>
                <CardComponent
                    timeName="work"
                    imageSrc={work.times.image}
                    time={work.times.weekly}
                    frame='Day'
                />
            </div>
        </div>
  );
};

export default CardsComponent;
