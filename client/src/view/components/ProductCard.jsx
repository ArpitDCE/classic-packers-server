import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to="/product" state={{ product }} className="group h-full">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
            {product.description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group-hover:translate-x-1">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    specifications: PropTypes.object.isRequired,
  }).isRequired,
};