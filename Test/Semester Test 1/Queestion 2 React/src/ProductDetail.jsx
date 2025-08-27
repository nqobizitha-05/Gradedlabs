import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
}
