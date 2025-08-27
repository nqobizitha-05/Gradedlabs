import { useEffect,useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import './App.css'
export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching products:", error);
          setLoading(false);
        }
    };

    fetchProducts();
    }, [])

    return(
        <>
            {products.map((product) => 
                <ProductCard key={product.id} product={product} onClick={() => navigate(`/product/${product.id}`)}/>
            )}
        </>
    )
}