import { useLocation } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/home" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Product not found</p>
          </div>
        </div>
      </div>
    );
  }

  const emailLink = `mailto:sales@classicpackers.com?subject=${encodeURIComponent(
    `Inquiry about ${product.name}`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI'm interested in learning more about your ${product.name} product.\n\nThank you!`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/home" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-lg opacity-30" />
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="relative w-full rounded-2xl shadow-lg object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/500x500/e2e8f0/4a5568?text=Product+Image";
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Classic Packers provides top-quality corrugated boxes designed to meet a wide array of packaging needs. Our boxes ensure durability, safety, and sustainability for transport and storage.
              </p>

              <div className="flex flex-col gap-4">
                <a href={emailLink} className="inline-block">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Inquire Now
                  </button>
                </a>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 px-8 md:px-12 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { label: "Material", value: product.specifications?.Material },
                  { label: "Length", value: product.specifications?.Length },
                  { label: "Width", value: product.specifications?.Width },
                  { label: "Height", value: product.specifications?.Height },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { label: "Box Type", value: product.specifications?.BoxType },
                  { label: "Printing", value: product.specifications?.Printing },
                  { label: "Load Capacity", value: product.specifications?.LoadCapacity },
                  { label: "Eco-Friendly", value: product.specifications?.EcoFriendly },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-8 md:px-12 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Description & Use Cases</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our corrugated boxes are engineered for strength and reliability, ensuring safe handling of goods during shipping and storage. Classic Packers offers both standard-size and fully customized packaging solutions to match your business needs while maintaining cost efficiency and sustainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Packaging for electronics and fragile goods",
                "Industrial and manufacturing shipments",
                "E-commerce and retail packaging",
                "Storage and logistics applications",
                "Custom branding and promotional packaging",
                "Food and beverage packaging",
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="text-gray-700">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
