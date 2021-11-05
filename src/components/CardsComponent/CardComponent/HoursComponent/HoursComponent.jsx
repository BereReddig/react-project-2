import './hoursComponent.css';

const HoursComponent = ({ time, name }) => {
  const current = time.current;
  const last = time.last;

  return (
    <>
      <h1 className="currentTime">{current}</h1>
      <p className="lastTime">
        Last {name} - {last}
      </p>
    </>
  );
};

export default HoursComponent;
