import "./App.css";
import PropsFirst from "./props/propsFirst";
import PropsSecond from "./props/propsSecond";
import PropsThird from "./props/propsThird";
import "./css/css.css";
import InputFirst from "./input/inputFirst";
import InputSecond from "./input/inputSecond";
import RsSecond from "./repeatStmt/rsSecond";
import RsFirst from "./repeatStmt/rsFirst";

function App() {
  return (
    <>
    <RsFirst></RsFirst>
      <RsSecond></RsSecond>
      <InputFirst></InputFirst>
      <InputSecond></InputSecond>
      <div>
        <PropsFirst name="a" price="123000" >
          <hr></hr>
        </PropsFirst>
        <PropsFirst name="b" price="123"></PropsFirst>

        <PropsSecond name="새우" maker={"농심"} price={"30000"}></PropsSecond>
        <PropsThird>ㅋㅋㅋ</PropsThird>
      </div>
    </>
  );
}

export default App;
