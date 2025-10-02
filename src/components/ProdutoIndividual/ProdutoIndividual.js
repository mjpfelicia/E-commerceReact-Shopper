// components/ProductDetail/ProductDetail.jsx
const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="product-detail">
      <div className="product-gallery">
        <img src={product.images[selectedImage]} alt={product.name} />
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img key={index} src={img} onClick={() => setSelectedImage(index)} />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">R$ {product.price}</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(q => Math.max(1, q-1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q+1)}>+</button>
        </div>
        <button className="add-to-cart">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};