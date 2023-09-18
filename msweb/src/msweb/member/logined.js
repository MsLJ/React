import React from "react";
import { useSelector } from "react-redux";

const Logined = () => {
  //로그인한 정보를 여기서도 끌어다 쓰기위한
  const loginInfo = useSelector((s) => s.ls.loginMember);
  //로그아웃 버튼 누르면 set한아이템 없애는
  return (
    <table>
      <tr>
        <td>{loginInfo.id}님 ㅎㅇ</td>
      </tr>
      <tr>
        <td>
          <button
            onClick={() => {
              sessionStorage.removeItem("loginToken");
            }}
          >logout</button>
        </td>
      </tr>
    </table>
  );
};

export default Logined;
