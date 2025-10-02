// Adicione no Header
const [cartItems, setCartItems] = useState([]);
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

// Componente CartSidebar
const CartSidebar = ({ isOpen, onClose, items }) => {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <h3>Carrinho ({items.length})</h3>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>R$ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};