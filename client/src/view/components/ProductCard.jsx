import { Link } from "react-router-dom";
export default function ProductCard({ product }){
  return (
    <Link to="/product" state={{product}}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>
    </div>
    </Link>
  );
};