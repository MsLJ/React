import logo from './logo.svg';
import './App.css';
import HookFirst from './hook/hookFirst';
import HookSecond from './hook/hookSecond';
import HookThird from './hook/hookThird';
import EventFirst from './event/eventFirst';
import Eventsecond from './event/eventsecond';
import HookForth from './hook/hookForth';

function App() {
  return (
    <>
   <HookFirst></HookFirst>
   <hr></hr>
   <HookSecond></HookSecond>
   <hr></hr>
   <HookThird></HookThird>
   <hr></hr>
   <EventFirst></EventFirst>
   <hr></hr>
   <Eventsecond></Eventsecond>
   <hr></hr>
   <HookForth></HookForth>
   </>

  );
}

export default App;
