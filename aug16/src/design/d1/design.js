import React from "react";
import "./d1.css";
const Design = () => {
  //JS객체 형태,JSX라서 낙타체
  const c = { backgroundColor: "red" };
  return (
    <>
      <div style={c}>Design</div>
      <div className="a">Design</div>
      <div className="b">Design</div>
    </>
  );
};

export default Design;
