import CardComponent from "./CardComponent/CardComponent";
import './CardsComponent.css';
import exercise from "../../assets/images/icon-exercise.svg";
import play from "../../assets/images/icon-play.svg";
import selfCare from "../../assets/images/icon-self-care.svg";
import social from "../../assets/images/icon-social.svg";
import study from "../../assets/images/icon-study.svg";
import work from "../../assets/images/icon-work.svg";

const CardsComponent = ({cardInfo, title}) => {
    const imagesTop = [work, play, study];
    const imagesBottom = [exercise, social, selfCare];
    const cardsTop = [cardInfo.work, cardInfo.play, cardInfo.study];
    const cardsBottom = [cardInfo.exercise, cardInfo.social, cardInfo.selfCare];

    return (
        <div className="cardComponentWrapper">
            <div>
                {cardsTop.map((card, index) => {
                    <CardComponent
                        timeName= {card.name}
                        imageSrc={imagesTop[index]}
                        time={card.current, card.last}
                        frame={title}
                    />
                })}
            </div>
            <div>
                {cardsBottom.map((card, index) => {
                    <CardComponent
                        timeName= {card.name}
                        imageSrc={imagesBottom[index]}
                        time={card.current, card.last}
                        frame={title}
                    />
                })}
            </div>
        </div>
  );
};

export default CardsComponent;
