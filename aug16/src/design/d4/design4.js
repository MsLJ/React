import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { styled } from 'styled-components'

//yarn add styled-components
//vscode-styled-components add-on 설치
const Design4 = () => {
    const MyDiv=styled.div`
    background-color: red;
    color: white;
    width: 100px;
    height: 100px;
    margin: 10px;
    `
const MyBtn=styled.button`
    background-color: aqua;
    color: white;
    margin: 20px;
    cursor: pointer;
    //자기자신
&:hover{
    background-color: aliceblue;
    color: green;
}
`;

  return (
    <>
    <MyDiv>Design4</MyDiv>
    <MyDiv>Design4qw</MyDiv>
    <MyBtn>buttonmm</MyBtn>
    <MyBtn>buttonmm2</MyBtn>
    </>
  )
}

export default Design4