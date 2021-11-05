import './ButtonComponent.css';

const ButtonComponent = ({ time, setCurrentTime }) => {

    return(
        <button
            className="ButtonComponent"
            onClick={() => setCurrentTime(time)}
        >
            <span>{time}</span>
        </button>
    );
}

export default ButtonComponent;