import CardComponent from "./CardComponent/CardComponent";
import './CardsComponent.css';

const CardsComponent = ({cardInfo, title}) => {
    const cardsTop = [cardInfo.work, cardInfo.play, cardInfo.study];
    const cardsBottom = [cardInfo.exercise, cardInfo.social, cardInfo.selfCare];

    let timeFrame;
    if(title == 'Daily') timeFrame = 'Day';
    else if(title == 'Weekly') timeFrame = 'Week';
    else timeFrame = 'Month';

    return (
        <div className="cardComponentWrapper">
            <div>
                {cardsTop.map((card, index) => 
                    <CardComponent
                        className={'card small-card ' + card.name}
                        timeName= {card.name}
                        time={{current: card.current, last: card.last}}
                        frame={timeFrame}
                    />
                )}
            </div>
            <div>
                {cardsBottom.map((card, index) => 
                    <CardComponent
                        className={'card small-card ' + card.name}
                        timeName= {card.name}
                        time={{current: card.current, last: card.last}}
                        frame={timeFrame}
                    />
                )}
            </div>
        </div>
  );
};

export default CardsComponent;