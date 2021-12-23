import './Hour-separation.css';

const HourSeparation = (props) => {
    let separation = [];
    const startingHour = props.startingHour || 9;
    const endingHour = props.endingHour || 21;
    for (let hour = startingHour; hour < endingHour; hour++) {
        separation.push(<tr><td>{`${hour}:00`}</td></tr>);
    }
    return <table className='hour-separation'>{separation}</table>;
}

export default HourSeparation;