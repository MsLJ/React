import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./msweb/member/loginSlice";
import { Provider } from "react-redux";

//index.css:사이트 전체의 규칙
//index.css에는 공통적으로 사용할것들을 설정해주는 예를들어 버튼 커서효과라든지
//사이트 전체의 스크롤바 효과를 없앤다든지

const storee = configureStore({
  reducer: {
    //이 아래 ls가 이제 모두가 가져다쓸때 쓰는  중요한 함수명
    ls: loginSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //이 앱에서 쓸수있게 Provider로 감싸주면 이제 모두가 ls로 불러서 쓸수있는
  <Provider store={storee}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
