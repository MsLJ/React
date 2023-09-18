import React, { useEffect, useState } from "react";

const Eventsecond = () => {
    const [css, setCss] = useState({position:"fixed",top:"-100px",left:"-100px",opacity:0});
    
  //jQuery에서 기존 기능 막기:return false;
  //JS에서 기존 기능 막기:
  const preventPopup = (e) => {
    e.preventDefault();
  };
  const showMyPopup = (e) => { 
    if(e.keyup===2){
        setCss({...css,top:e.pageY+"px",left:e.pageX+"px",opacity:1});
        setTimeout(()=>{
            setCss({...css,top:"-100px",left:"-100px",opacity:0});
        },3000);

    }
  }
  useEffect(() => {

    
    document.addEventListener("contextmenu", preventPopup);
    document.addEventListener("mouseup",showMyPopup);
    return () => {
      document.removeEventListener("contextmenu", preventPopup);
      document.removeEventListener("mouseup",showMyPopup);
    };
  }, []);

  return (
    <div>
      <table>
        <tr>
          <td>
            <a href="https://naver.com">네이버로</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://google.com">구글로</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://daum.net">다음으로</a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Eventsecond;
