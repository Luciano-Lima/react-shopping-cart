export default function ProductCard({product, onAddToCart}) {
    const {image, name, price} = product

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={image} alt={name} className="product-image" />
            </div>
            <div className="product-body">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">£{price.toFixed(2)}</p>
                <button className="btn-primary" onClick={() => onAddToCart(product)} >Add to Cart</button>
            </div>
        </div>
    )
}