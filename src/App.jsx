import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import { products } from "./data/products";
import Cart from "./components/cart";
import { useState } from "react";


export default function App() {
  const [cartItems, setCartItems] = useState([])

  function handleAddToCart(product) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id) 
      if (existingItem){ //check if item is already in the cart
        return items.map((item) => item.id === product.id ? {...item, quantity: item.quantity +1}: item) // '+1' if item exists increment its quantity otherwise leave unchanged : item
      }
      return [...items, {...product, quantity: 1} ] // if item does not exists, add it as new item 
    }) 
  }

  return (
    <div className="app-header">
      <h1>Coffee Shop</h1>
      <p>A moder shopping cart</p>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart
        items={cartItems}
      />
    </div>
  )
}