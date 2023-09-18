import logo from "./logo.svg";
import "./App.css";
import Design from "./design/d1/design";
import Design2 from "./design/d2/design2";
import Design3 from "./design/d3/design3";
import Design4 from "./design/d4/design4";
import Design5 from "./design/d5/design5";
import Design6 from "./d6/design6";

//OOP-> 일반 웹개발보다 -> 파일이 많아지고
//id/class도 많이 쓰게 되겠고....

//.mainArea
function App() {
  return (
    <>
      <Design></Design>
      <hr></hr>
      <Design2></Design2>
      <hr></hr>
      <Design3></Design3>
      <hr></hr>
      <Design4></Design4>
      <hr></hr>
      <Design5></Design5>
      <hr></hr>
      <Design6></Design6>
    </>
  );
}

export default App;
