import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Msweb from './msweb/msweb';
import Home from './msweb/home/home';
import "./msweb/member/member.css";
import Join from './msweb/member/join';

//app.js는 링크들을 걸어야하니 사이트 메인처럼은 못쓰겠고
//그러니 사이트 메인을 하나 따로 만들자 Site.js
function App() {
  return (
   <Routes>
    <Route  element={<Msweb></Msweb>}>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/join.go'element={<Join></Join>}></Route>

    </Route>


   </Routes>
  );
}

export default App;
