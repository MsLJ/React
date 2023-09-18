import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    txt:"AUG23",
}

//Input값을 받으려면 payload를
//보내준 텍스트를 위에 txt에 저장
const MyTxtSlice = createSlice({
  name: "mtss",
  initialState,
  reducers: {
    changeTxt:(statee,actionn)=>{
        statee.txt=actionn.payload;
    }
  }
});

export const {changeTxt} = MyTxtSlice.actions

export default MyTxtSlice.reducer