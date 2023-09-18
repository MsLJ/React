import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTxt } from './myTxtSlice';

const MyInput = () => {
  const dispatch = useDispatch(); // Changed 'd' to 'dispatch' for clarity
  const txtt = useSelector((state) => state.mts.txt);

  return (
    <input
      type="text" // Added input type
      value={txtt}
      onChange={(e) => {
        dispatch(changeTxt(e.target.value)); // Dispatch the action
      }}
    />
  );
};

export default MyInput;
