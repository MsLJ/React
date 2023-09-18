import React from "react";
import { css, styled } from "styled-components";
const MyH1 = styled.h1`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.c};
`;
const MyH2 = styled.h2`
  font-size: ${(props) => {
    if (props.size === "big") {
      return "30pt";
    } else if (props.size === "small") {
      return "10pt";
    } else {
      return "20pt";
    }
  }};
`;
const MyH3 = styled.h3`
  ${(props) => {
    if (props.theme === "light") {
      return css`
        background-color: white;
        color: black;
      `;
    } else {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const Design5 = () => {
  return (
    <>
      <MyH1 bg="red" c="white">
        zzz
      </MyH1>
      <MyH1 bg="blue" c="white">
        zzz
      </MyH1>
      <MyH2 size="big">ㅎㅎ</MyH2>
      <MyH2 size="small">ㅎㅎ</MyH2>
      <MyH3 theme="light">aa</MyH3>
      <MyH3 theme="dark">bb</MyH3>
    </>
  );
};

export default Design5;
