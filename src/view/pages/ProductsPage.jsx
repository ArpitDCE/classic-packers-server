import { staticProducts } from "../App";
import ProductCard from "../components/ProductCard";
export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Classic Packers provides top-quality corrugated boxes, designed to
          meet a wide array of packaging needs. Our products are crafted for
          durability and reliability, ensuring the safe transport and storage of
          your goods. Whether you require standard sizes or custom solutions,
          Classic Packers delivers cost-effective and sustainable packaging
          options, tailored to your specific requirements. Choose Classic
          Packers for packaging that protects your products and enhances your
          brand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
