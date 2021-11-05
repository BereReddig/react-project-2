import { useState, useEffect } from 'react';

import ProfileComponent from '../components/ProfileComponent/ProfileComponent';
import CardsComponent from '../components/CardsComponent/CardsComponent';

import timeData from '../time-data.json';

const TimeTrack = () => {
    const [data, setData] = useState(timeData[0].cards);
    const [currentTimeInfo, setCurrentTimeInfo] = useState("Daily");

    function handleTimeInfoChange(timeInfo) {
        setCurrentTimeInfo(timeInfo);
    }

    function setTimeInfo() {
        if (currentTimeInfo == "Daily") {
            setData(timeData[0].cards);
        } else if (currentTimeInfo == "Weekly") {
            setData(timeData[1].cards);
        } else {
            setData(timeData[2].cards);
        }
    }

    useEffect(() => {
        setTimeInfo();
    }, [currentTimeInfo, data])

    return (
        <div className="App">
            <ProfileComponent sendDataToParent={handleTimeInfoChange} currentTimeInfo={currentTimeInfo} />
            <CardsComponent cardInfo={data} title={currentTimeInfo} />
        </div>
    );
}

export default TimeTrack;