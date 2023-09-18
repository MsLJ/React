import React, { useState } from "react";

function Today() {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [products, setProducts] = useState([]);
  const updateProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const productsTr = products.map((p, i) => (
    <tr>
      <td onClick={()=>{del(p.name);}}>{p.name}</td>
      <td>{p.price}</td>
    </tr>
  ));
  const reg = () => { 
    
    //concat:기존에 p추가해서 새로운 배열
    const newProducts = products.concat(product);
    setProducts(newProducts);
    setProduct({name:"",price:""});
   }
   const del = (n) => {
    const newProducts = products.filter((p) => p.name !== n);
    setProducts(newProducts);
  };

  return (
    <>
      이름:
      <input name="name" value={product.name} onChange={updateProduct}></input>
      <p></p>
      가격:
      <input name="price" value={product.price} onChange={updateProduct}></input>
      <p></p>
      <button onClick={reg}>등록</button>
      <hr></hr>
      <table border={1}>{productsTr}</table>
    </>
  );
}

export default Today;
