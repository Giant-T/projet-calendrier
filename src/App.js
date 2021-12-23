import './App.css';
import HourSeparation from './Hour-separation';

function App() {
  return (
    <div className="App">
      <div className='calendar'>
        <HourSeparation startingHour={9} endingHour={21}/>
        <div className='calendar-stripe-light'>
          <div className='activity' style={{height: 'calc(100% / 12 * 1)', top: 'calc(100% / 12 * (0))'}}>{'Heyo'}</div>
          <div className='activity' style={{height: 'calc(100% / 12 * 1)', top: 'calc(100% / 12 * (0.5 - 1))'}}>{'Ceci est un test.'}</div>
          <div className='activity' style={{height: 'calc(100% / 12 * 3)', top: 'calc(100% / 12 * (4 - 3))'}}>{'yo'}</div>
          <div className='activity' style={{height: 'calc(100% / 12 * 3)', top: 'calc(100% / 12 * (5 - 6))'}}>{'Ceci est un autre test.'}</div>
        </div>
        <div className='calendar-stripe-gray'></div>
        <div className='calendar-stripe-light'>
          <div className='activity' style={{height: 'calc(100% / 12 * 3)', top: 'calc(100% / 12 * (4 - 1))'}}>{'yo'}</div>
        </div>
        <div className='calendar-stripe-gray'></div>
        <div className='calendar-stripe-light'></div>
        <div className='calendar-stripe-gray'></div>
        <div className='calendar-stripe-light'></div>
      </div>
    </div>
  );
}

export default App;
