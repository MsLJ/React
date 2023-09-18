import axios from "axios";
import React, { useState } from "react";

//ajax 라이브러리
//yarn add axios
const Ajax = () => {
  const [w, setW] = useState({desc:"",tem:"",hum:""});
  const getWeather = /*async*/ () => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=baff8f3c6cbc28a4024e336599de28c4&units=metric&lang=kr";

    //axois.get아니면post().then(결과(콜백함수) 받으면)=>{alert(JSON.stringfy(콜백함수))}
    //axios는 받은게 데이터 Python으로 치면 res.data=resBody 
    //기존은 비동기식이라 아래 AAA가 먼저출력돼는데 만약 동기식으로 하고싶으면 위에 async 그리고 아래에
    //await를 추가
    /*await*/ axios.get(url).then((res) => {
        setW({desc:res.data.weather[0].description,tem:res.data.main.temp,hum:res.data.main.humidity});
      
    });
    //alert("AAA");
  };
  return (
    <>
      <h1>날씨:{w.desc}</h1>
      <h1>기온:{w.tem}</h1>
      <h1>습도:{w.hum}</h1>
      <button onClick={getWeather}>확인</button>
    </>
  );
};

export default Ajax;
