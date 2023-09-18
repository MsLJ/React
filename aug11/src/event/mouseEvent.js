import React, { useState } from "react";

const MouseEvent = () => {
  const divCss = { width: "300px", height: "300px", border: "black solid 3px" };
  const [move, setMove] = useState("");
  const [pos, setPos] = useState("");
  return (
    <>
      <div
        style={divCss}
        onMouseEnter={() => {
          setMove("mouseEnter");
        }}
        onMouseMove={(e) => {
          //setPos(e.clientX+","+e.clientY);
          setPos(e.nativeEvent.offsetX + "," + e.nativeEvent.offsetY);
        }}
        onMouseLeave={() => {
          setMove("mouseLeave");
        }}
        onMouseDown={() => {
          setMove("mouseDown");
        }}
        onMouseUp={(e) => {
          setMove(e.button);
        }}
      >
        MouseEvent
      </div>
      <h1>{move}</h1>
      <h1>{pos}</h1>
    </>
  );
};

export default MouseEvent;
