import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const PhotoBBS = () => {
const imgCss={maxWidth:"100px"};

const photoInput = useRef();
  const [p, setP] = useState({ title: "", file: "" });
  const [photos, setPhotos] = useState([]);
  //선택하고싶을때 쓰는 Hook때 쓴
    const photosTr=photos.map((v,i)=>(
        <tr><td>{v.title}</td>
        <td><img src={"http://localhost:81/photo/"+v.file} style={imgCss} alt=""></img> </td>
        </tr>
    ))
  const fd = new FormData();
  //요청 파라메터명,값
  fd.append("title", p.title);
  //지금 리엑트에서 보내는것은 파일인데  java bean에 String이니까 바로넣지않고
  //작업해서 넣어야할것
  fd.append("file2", p.file);
  const upload = () => {
    axios
      .post("http://localhost:81/photo.upload", fd, {
        //파일업로드
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      })
      .then((res) => {
        alert("성공");
        get();
        //alert(JSON.stringify(res.data));
        setP({ title: "", file: "" });
        //포토 업로드하고나면 벨류 다 지워지는
        photoInput.current.value = "";
      });
    };
    const get = () => {
      axios.get("http://localhost:81/photo.get").then((res) => {
       // alert(JSON.stringify(res.data));
        setPhotos(res.data.photos);
      });
};
  useEffect(()=>{get();},[])
  
  return (
    <>
      제목:
      <input
        value={p.title}
        onChange={(e) => {
          setP({ ...p, title: e.target.value });
        }}
      ></input>
      <p></p>
      사진:
      <input
        ref={photoInput}
        type="file"
        onChange={(e) => {
          setP({ ...p, file: e.target.files[0] });
        }}
      ></input>
      <p></p>
      <button onClick={upload}>업로드</button>
      <hr></hr>
      
      <table border={1}>{photosTr}</table>
    </>
  );
};

export default PhotoBBS;
