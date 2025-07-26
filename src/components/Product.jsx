import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="card w-full md:w-72 bg-base-100 shadow-xl">
      <figure><img src={product.thumbnail} alt={product.title} className="h-48 object-cover w-full" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-sm">{product.description.slice(0, 60)}...</p>
        <div className="card-actions justify-between mt-2">
          <span className="text-lg font-bold">${product.price}</span>
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
