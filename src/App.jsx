import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import { products } from "./data/products";


export default function App() {

    return (
        <div className="app-header">
          <h1>Coffee Shop</h1>
          <p>A moder shopping cart</p>
          <ProductList products={products} />
        </div>
    )
}