import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const Fifth = () => {
  const [menu, setMenu] = useSearchParams();

  //50%확률로 생성되는
    if(Math.random()>0.5){
        return <Navigate to="/sixth.go" replace={true}></Navigate>
    }


  return (
    <>
      <div>Fifth</div>
      <h2>{menu.get("namee")}</h2>
      <h2>{menu.get("pricee")}</h2>
    </>
  );
};

export default Fifth;
