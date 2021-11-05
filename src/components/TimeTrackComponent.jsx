import { useState, useEffect } from 'react';

import ProfileComponent from '../components/ProfileComponent/ProfileComponent';

const TimeTrack = () => {
    const [data, setData] = useState("1");
    const [currentTimeInfo, setCurrentTimeInfo] = useState("Daily");

    function handleTimeInfoChange(timeInfo) {
        setCurrentTimeInfo(timeInfo);
    }

    function setTimeInfo() {
        if (currentTimeInfo == "Daily") {
            setData("1");
        } else if (currentTimeInfo == "Weekly") {
            setData("2");
        } else {
            setData("3");
        }
    }

    useEffect(() => {
        setTimeInfo();
        console.log(data, currentTimeInfo)
    }, [currentTimeInfo, data])

    return (
        <div className="App">
            <ProfileComponent sendDataToParent={handleTimeInfoChange} currentTimeInfo={currentTimeInfo} />
            {/* <CardsComponent props={data} /> */}
        </div>
    );
}

export default TimeTrack;