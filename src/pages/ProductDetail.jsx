import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <div className="flex justify-center py-10"><span className="loading loading-ring loading-lg"></span></div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={product.thumbnail} alt={product.title} className="w-full max-w-xs object-cover" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
