import NameComponent from './NameComponent/NameComponent';
import HoursComponent from "./HoursComponent/HoursComponent";
import ellipsis from '../../../assets/images/icon-ellipsis.svg';
import './CardComponent.css';

const CardComponent = ({className, timeName, time, frame}) => {
    return (
        <div className={className}>
            <div className="cardInfo">
                <div className='title-container'>
                    <NameComponent name={timeName}/>
                    <img className='ellipsis' src={ellipsis} alt="ellipsis"/>
                </div>
                <div className='card-details'>
                    <HoursComponent time={time} name={frame}/>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;