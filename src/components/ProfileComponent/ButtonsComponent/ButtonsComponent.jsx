import './ButtonsComponent.css';

import ButtonComponent from './ButtonComponent/ButtonComponent';

const ButtonsComponent = ({ sendDataToParent }) => {
    const times = ['Daily', 'Weekly', 'Monthly'];
    return (
        <div className="ButtonsComponent">
            {times.map((title) => (
                <ButtonComponent 
                    key={title}
                    time={title}
                    setCurrentTime={() => sendDataToParent(title)}
                />
            ))}
        </div>
    );
}

export default ButtonsComponent;