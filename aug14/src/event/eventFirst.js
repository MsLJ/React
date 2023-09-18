import React, { useEffect, useState } from "react";

//document
//window

//jQuery
// 객체 크기: $(window).width()/ $(window).height()
//  이벤트 연결:$(선택자).이벤트(콜백함수);

//JavaScript
//  객체 크기:window.innerWidth /window.innerHeight
//  이벤트 연결:변수.addEventListner("이벤트","콜백함수");
const EventFirst = () => {
  const [sizee, setSizee] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const changeSize = () => {
    setSizee({ w: window.innerWidth, h: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      //메인을 계속 부르는것이기에 없어질떄 삭제해야
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return (
    <div>
      <h1>{sizee.w}</h1>
      <h1>{sizee.h}</h1>
    </div>
  );
};

export default EventFirst;
