import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import mySizeSlice from './mySizeSlice';
import { Provider } from 'react-redux';
import myTxtSlice from './myTxtSlice';

// store 
// reducer(slice)들 등록
const storeee=configureStore({
  reducer:{
    //mysizeslice에 등록한 명은 중요하지않지만
    //여기에 등록한게 중요한 이 mss를 불러서 가져다쓰는거
    mss:mySizeSlice,
    mts:myTxtSlice,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provider로 영향설정을 이렇게 세팅하면 전체사이트에 적용돼는 위에
  //작업한 mss를 다 쓸수있음
  <Provider store={storeee}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
