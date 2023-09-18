import React from 'react';

const RsFirst = () => {
  return (
    <button onClick={()=>{
        //JavaScirpt는 고급언어 자료형 자동으로 처리
        alert(1==1);//true
        alert("1"==1)//true
        alert("1"===1)//ES6에 추가된 자료형까지 따지는 ==
        const ar=[12312,453,21,12,54]
        //값 필터링해서 새로윤 배열 생성
        //배열.filter((값)=>(조건식)
        const ar2=ar.filter((v)=>v%2!==0);
        //for+for-each
        //배열.map((값,인덱스)=>...)
        ar.map((v,i)=>{
            alert(v);
            alert(i);
        });
    }}
    >

    RsFirst
    </button>
    
)}

export default RsFirst