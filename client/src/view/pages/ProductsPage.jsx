import { staticProducts } from "../App";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Our Premium Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Classic Packers provides top-quality corrugated boxes, designed to meet a wide array of packaging needs. Our products are crafted for durability and reliability, ensuring the safe transport and storage of your goods. Whether you require standard sizes or custom solutions, we deliver cost-effective and sustainable packaging.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom solution?
          </p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50">
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  );
}
