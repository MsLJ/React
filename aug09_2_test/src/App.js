import logo from './logo.svg';
import './App.css';
import MyH1 from './myH1';
import MyBtn from './myBtn';

//alt + shift + f:소스 정렬
//alt + shift + 위/아래:줄 복사
//ctrl + shift + k:줄 삭제

//react:
//  VirtualDOM을 활용해서 잦은 업데이트에 용이
//  OOP

// JSX(JavaScript XML)
//    HTML비슷
//    DOM객체 하나여야
function App() {
  return (
    //객체 만들어놓은거 여기다가 불러서 쓰는
    <div>
      <MyH1></MyH1>
      <MyH1></MyH1>   
      <MyBtn></MyBtn>
    </div>
  );
}

export default App;
