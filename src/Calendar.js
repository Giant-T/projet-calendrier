import React from "react";
import './Calendar.css';

class Day extends React.Component {
    render() {
        let activities = [];
        const maxActivities = Math.floor(Math.random() * 4);
        let heightModifier = 0;
        for (let i = 0; i < maxActivities; i ++) {
            let duration = 100 / 12 * Math.ceil(Math.random() * 4 + 1);
            let positionTop = Math.floor(Math.floor(Math.random() * 5));
            console.log(positionTop);
            positionTop *= 100 / 12;
            positionTop -= heightModifier;
            activities.push(
                <div key={i} className='activity' style={{height: `${duration}%`, top: `${positionTop}%`}}></div>
            );
            heightModifier += duration;
        }
        return (
            <div className={`calendar-stripe-${this.props.light ? 'light' : 'gray'}`}>
                {activities}
            </div>
        );
    }
}

const HourSeparation = (props) => {
    let separation = [];
    const startingHour = props.startingHour || 9;
    const endingHour = props.endingHour || 21;
    for (let hour = startingHour; hour < endingHour; hour++) {
        separation.push(<tr key={hour}><td>{`${hour}:00`}</td></tr>);
    }
    return <table className='hour-separation'><tbody>{separation}</tbody></table>;
}

class Calendar extends React.Component {
    render() {
        let days = [];
        for (let i = 0; i < this.props.numberOfDays; i ++) {
            days.push(<Day key={i} light={i % 2 === 0}/>);
        }
        return (
            <div className="calendar">
                <HourSeparation/>
                {days}
            </div>
        );
    }
}

export default Calendar;
