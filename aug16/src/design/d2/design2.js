import React from "react";
import d22 from "./d2.module.css"; //import 이름 from "파일명";
//OOP->일반 웹 개발보다 ->파일 많아짐
//id class 도 많이 쓰고

//??.css->전체에 다 적용
//??.module.css ->이름.class명으로 사용
//moudle.css로 해놓으면 쓴곳에만 적용
//module.css에서도 :global 클래스명 쓰면 그냥 다 적용돼는

//ES6
//  문자열:'' or ""
//  문자열 처리할때 ''(backtick - ~밑에 있는)
//  let t='
//    여러줄
//    처리가능
//  ';
//  let t2=`ㅋㅋ${변수명}ㅋ`;
//    alert(`ㅋㅋㅋ${a}ㅎㅎ`);
const Design2 = () => {
  return (
    <>
      <div className="a">qq</div>
      <div className={d22.b}>ww</div>
      <div className="b">ww</div>
      <h1 className={`${d22.b} ${d22.b2}`}>ee</h1>
    </>
  );
};

export default Design2;
