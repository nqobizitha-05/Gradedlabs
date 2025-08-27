import './App.css'
export default function ProductCard({product, onClick}){

    return(
        <>
            <div className="product-card" onClick={onClick}>
                <img src={product.image} alt={product.title}/>
                <h4>{product.title}</h4>
                <p>{product.price}</p>
            </div>
        </>
    )
}