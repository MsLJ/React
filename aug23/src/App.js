import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Site from './site';
import Home from './home';
import SNS from './sns';
import MyPage from './mypage';

function App() {
  //include할꺼면 index route안에 나머지 페이들을 넣는
  //그리고 기존에 했던거처럼 똑같이
  return (
    <Routes>
     <Route element={<Site></Site>}>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/sns.go' element={<SNS></SNS>}></Route>
      <Route path='/mypage.go' element={<MyPage></MyPage>}></Route>

     </Route>
    </Routes>
  );
}

export default App;
