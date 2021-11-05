import './hoursComponent.css';

const HoursComponent = ({ time, name }) => {
  const current = time.current;
  const last = time.last;

  return (
    <>
      <p className="currentTime">{current}</p>
      <p className="lastTime">
        Last {name} - {last}
      </p>
    </>
  );
};

export default HoursComponent;
