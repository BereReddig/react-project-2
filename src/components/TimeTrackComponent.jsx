import { useState, useEffect } from 'react';

import './TimeTrackComponent.css';

import ProfileComponent from '../components/ProfileComponent/ProfileComponent';
import CardsComponent from '../components/CardsComponent/CardsComponent';

import timeData from '../time-data.json';

const TimeTrack = () => {
    let title = 'Day';
    const [data, setData] = useState(timeData[0].cards);
    const [currentTimeInfo, setCurrentTimeInfo] = useState("Daily");

    function handleTimeInfoChange(timeInfo) {
        setCurrentTimeInfo(timeInfo);
    }

    function setTimeInfo() {
        if (currentTimeInfo == "Daily") {
            setData(timeData[0].cards);
            title = 'Day';
        } else if (currentTimeInfo == "Weekly") {
            setData(timeData[1].cards);
            title = 'Week';
        } else {
            setData(timeData[2].cards);
            title = 'Month';
        }
    }

    useEffect(() => {
        setTimeInfo();
    }, [currentTimeInfo, data])

    return (
        <div className="App">
            <div className="flex-layout">
                <ProfileComponent sendDataToParent={handleTimeInfoChange} currentTimeInfo={currentTimeInfo} />
                <CardsComponent cardInfo={data} title={title} />
            </div>
        </div>
    );
}

export default TimeTrack;