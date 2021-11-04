import './ButtonComponent.css';

const ButtonComponent = ({ time, isSelected }) => {

    return(
        <button
            className="ButtonComponent"
            onClick={() => setCurrentTime(time)}
            // style={{ color: isSelected ? '#ffffff' : '#5847eb'}}
        >
            <span>{time}</span>
        </button>
    );
}

export default ButtonComponent;