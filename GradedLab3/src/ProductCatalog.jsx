import { useState, useEffect } from "react";
import './Products.css'
export default function ProductCatalog(){
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        setLoading(true);
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
          });

        }, [])

        useEffect(() => {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);

        }, [searchQuery, products])

    function handleSearchChange(e) {
        setSearchQuery(e.target.value)
    }

    return(
        <>
            <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
            <p>{loading ? "Loading..." : null}</p>
            <p>{error ? "Error Fetching data" : null}</p>
            {!loading && !error && (
              <ul className="product-list">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li key={product.id}>
                        <div className="product-card">
                            <img src={product.image}/>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </div>
                    </li>
                  ))
                ) : (
                  <p>No results</p>
                )}
              </ul>
            )}
        </>
    )

    
}