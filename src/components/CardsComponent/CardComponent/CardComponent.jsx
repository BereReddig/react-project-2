import ImageComponent from './ImageComponent/ImageComponent';
import NameComponent from './NameComponent/NameComponent';
import HoursComponent from "./HoursComponent/HoursComponent";
import './CardComponent.css';

const CardComponent = ({timeName, imageSrc, time, frame}) => {

    return (
        <div className="card">
            <ImageComponent src={imageSrc} alt={timeName}/>
            <div>
                <NameComponent name={timeName}/>
                <HoursComponent time={time} name={frame}/>
            </div>
        </div>
    );
}

export default CardComponent;