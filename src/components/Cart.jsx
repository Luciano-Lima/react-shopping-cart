export default function Cart({ items, onAddToCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    £{item.price.toFixed(2)}
                  </span>
                </div>
                <div className="cart-item-controls">
                    <input type="number" min="1" value={item.quantity} />
                    <button className="btn danger">x</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
