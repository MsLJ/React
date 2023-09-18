import logo from './logo.svg';
import './App.css';
import First from './page/first';
import { Route, Routes } from 'react-router-dom';
import Second from './page/second';
import Third from './page/third';
import Fourth from './page/fourth';
import Fifth from './page/fifth';
import Sixth from './page/sixth';
import Seventh from './page/seventh';

//third.go/새우깡/5000
function App() {
  //<routes>안에 이제 각각 띄울꺼 <route>에 path를 설정 넣어주면
  //예를들어 path가 /이면 첫번째 화면을 띄워주는 element에는 뭘띄워줄지 넣는
  //아니면 그냥 index로 써도 첫번째 페이지 뜨는

  //만약 주소에 값을 넣어서 보내고싶다면 :이름 :가격 이런식
  //                                  ex:  :n   :p

  // 등록안됀 주소쓰면 seventh를 띄우는
  return (
    <Routes>
    
      <Route index element={<First></First>}></Route>
      <Route path="/second.go" element={<Second></Second>}></Route>
      <Route path="/third.go/:n/:p" element={<Third></Third>}></Route>
      <Route path="/fourth.go/" element={<Fourth></Fourth>}></Route>
      <Route path="/fifth.go/" element={<Fifth></Fifth>}></Route>
      <Route path='/sixth.go' element={<Sixth></Sixth>}></Route>
      <Route path='*' element={<Seventh></Seventh>}></Route>
    </Routes>
  );
}

export default App;
