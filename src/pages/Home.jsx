import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default Home;
