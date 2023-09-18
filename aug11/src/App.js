import logo from './logo.svg';
import './App.css';
import Yesterday from './yesterday/yesterday';
import MouseEvent from './event/mouseEvent';
import PopupEvent from './event/popupEvent';
import KeyboardEvent from './event/keyboardEvent';
import Newinput from './event/newinput';
import Today from './today/today';

function App() {
  return (
    <div>
      <Today></Today>
      <Newinput></Newinput>
      <KeyboardEvent></KeyboardEvent>
      <PopupEvent></PopupEvent>
      <MouseEvent></MouseEvent>
     <Yesterday></Yesterday>
    </div>
  );
}

export default App;
