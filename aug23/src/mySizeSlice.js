// reducer : 현재상태(State) + 행동(action)을 받아서
// 새로운 state를 return하는 함수
//reducer + action = slice

//rxslice
import { createSlice } from "@reduxjs/toolkit";

//사이즈 초기값이 10인 변수
const initialState = {
  sizeKeke: 10, //초기값을 10pt
};

const mySizeSlice = createSlice({
  name: "mss", //쓸일은 없다
  initialState,
  reducers: {
    //변수명도 딱히 중요하지x 10씩 늘리는
    goBigger: (stateQQQ) => {
      stateQQQ.sizeKeke += 10;
    },
    //                      10씩 줄이는
    goSmaller: (stateWWW) => {
      stateWWW.sizeKeke -= 10;
    },
  },
});

//이곳에 함수를 등록해줘야 쓸수있는
export const {goBigger,goSmaller} = mySizeSlice.actions;

export default mySizeSlice.reducer;
