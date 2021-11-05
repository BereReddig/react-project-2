import ImageComponent from './ImageComponent/ImageComponent';
import NameComponent from './NameComponent/NameComponent';
import HoursComponent from "./HoursComponent/HoursComponent";
import ellipsis from '../../../assets/images/icon-ellipsis.svg';
import './CardComponent.css';

const CardComponent = ({timeName, imageSrc, time, frame}) => {
    return (
        <div className="card">
            <ImageComponent src={imageSrc} alt={timeName}/>
            <div className="cardInfo">
                <NameComponent name={timeName}/>
                <img src={ellipsis} alt="ellipsis"/>
                <HoursComponent time={time} name={frame}/>
            </div>
        </div>
    );
}

export default CardComponent;