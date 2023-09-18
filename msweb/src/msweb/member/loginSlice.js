import { createSlice } from "@reduxjs/toolkit";
//rxslice
//yarn add @reduxjs/toolkit react-redux
//초기저장상태 로그인멤버 없는
//인덱스쪽에도 등록을
const initialState = {
  loginMember: {},
};

const loginSlice = createSlice({
  name: "ls",
  initialState,
  reducers: {
    setLoginMember: (s, a) => {
      //비동기식 통신쓰면 에러나는 여기서는 그냥 세팅만드는작업만
      s.loginMember = a.payload;
      alert(JSON.stringify(s.loginMember));
    },
  },
});

//다른곳에서도 쓸려면 아래에 지정해주는
export const { setLoginMember } = loginSlice.actions;

export default loginSlice.reducer;
