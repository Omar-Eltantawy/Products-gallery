import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const {isDark}= useSelector((state)=>state.theme);
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-110 transition-all duration-300">
      <div className="relative h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-[240px]">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h2>

        <div className="mt-2 flex items-center justify-between">
          <span className={`${isDark ? "dark":" "} text-primary dark:text-primary-dark font-bold text-xl`}>${product.price}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
            {product.category}
          </span>
        </div>

        {product.rating && (
          <StarRating rate={product.rating.rate} count={product.rating.count} />
        )}

        <Link
          to={`/products/${product.id}`}
          className={`mt-4 w-full text-white py-2 text-center rounded-lg ${isDark ? "dark":" "} bg-primary dark:bg-primary-dark  text-white rounded-xl hover:bg-blue-700 dark:hover:bg-red-900 transition`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
