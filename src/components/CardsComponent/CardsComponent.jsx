import CardComponent from "./CardComponent/CardComponent";
import './CardsComponent.css';

const CardsComponent = ({cardInfo, title}) => {
    const cardsTop = [cardInfo.work, cardInfo.play, cardInfo.study];
    const cardsBottom = [cardInfo.exercise, cardInfo.social, cardInfo.selfCare];

    return (
        <div className="cardComponentWrapper">
            <div>
                {cardsTop.map((card, index) => 
                    <CardComponent
                        className={'card small-card ' + card.name}
                        timeName= {card.name}
                        time={{current: card.current, last: card.last}}
                        frame={title}
                    />
                )}
            </div>
            <div>
                {cardsBottom.map((card, index) => 
                    <CardComponent
                        className={'card small-card ' + card.name}
                        timeName= {card.name}
                        time={{current: card.current, last: card.last}}
                        frame={title}
                    />
                )}
            </div>
        </div>
  );
};

export default CardsComponent;
