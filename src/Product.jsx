import "./Product.css"
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
function Product() {
  const [product, setProduct] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
        setProduct(data);
      
      console.log("fetching products", data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1 className="header">E-Commerce Products</h1>
      <div className="product-wow">
       {
        product.map((products) => (
          <div key={product.id}>
               <ProductList product={products} />
          </div>
        ))
       }
      </div>
    </div>
  );
}

export default Product;
