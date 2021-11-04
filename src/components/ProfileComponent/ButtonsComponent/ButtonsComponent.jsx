import './ButtonsComponent.css';

import ButtonComponent from './ButtonComponent/ButtonComponent';

const ButtonsComponent = ({ currentTime}) => {
    const times = ['Daily', 'Weekly', 'Monthly'];
    return (
        <div className="ButtonsComponent">
            {times.map((title) => (
                <ButtonComponent 
                    key={title}
                    time={title}
                    setCurrentInfo={() => sendData(title)}
                    isSelected={currentTime == title}
                />
            ))}
        </div>
    );
}

export default ButtonsComponent;