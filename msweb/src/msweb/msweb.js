import React, { useEffect } from "react";
import Title from "./title/title";
import Content from "./content";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginMember } from "./member/loginSlice";
import { useNavigate } from "react-router-dom";

//이게 이제 index html이 될것
//모든곳에 로그인을 적용시켜야하기에 그 작업을 여기서해주는
//로그인에 set해놓은 그 세션값을 getitem으로 불러오는
//이 함수를 어디서든 사용이 가능해야하기에 export를 앞에 추가함으로써 다 쓸수있게된
let d = null;
let n = null;
export const isLogined = () => {
  axios
    .get(
      `http://localhost:81/member.info.get?token=${sessionStorage.getItem(
        "loginToken"
      )}`
    )
    .then((res2) => {
      d(setLoginMember(res2.data));
      if (res2.data.id === undefined || res2.data.id === "") {
        n("/");
      } else {
        axios
          .get(
            `http://localhost:81/member.token.update?token=${sessionStorage.getItem(
              "loginToken"
            )}`
          )
          .then((res3) => {
            //다시 받아온 토큰을 다시 set해주면 활동할때마다 토큰이 갱신되기에 로그인이 풀리지않는 
            sessionStorage.setItem("loginToken", res3.data.token);
            // alert(JSON.stringify(res.data));
          });
      }
      //alert(JSON.stringify(res2.data));
    });
};
const Msweb = () => {
  d = useDispatch(); //react component속에 있어야하는 근데 밖에서도 쓸려면 뭔가가 필요할텐데
  //밖에다 const는 상수이기에 변경이 불가능한 let으로 변수로 만들어서 밖에다 두는
  n = useNavigate();
  //이 문서에 클릭 이벤트가 발생하면 그때마다 매번 로그인체크를 하게
  useEffect(() => {
    document.addEventListener("click", isLogined);

    return () => {
      document.removeEventListener("click", isLogined);
    };
  }, []);

  return (
    <>
      <Title></Title>
      <Content></Content>
    </>
  );
};

export default Msweb;
