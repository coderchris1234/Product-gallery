import "./Product.css";
function ProductList({product}) {
  return (
    <div className="product-container">
      <div className="product-wrapper">
        <img src={product.image} alt="" className="image" />
        <span>{product.brand}</span>
        <p>{product.title}</p>
        <p>{product.model}</p>
        <span>{product.price}</span>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductList;
