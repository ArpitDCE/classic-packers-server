import React from "react";
import { useLocation } from "react-router-dom";
const ProductInfo = () => {
  const location=useLocation();
  const {product}=location.state || {};
  const emailLink =`mailto:classicpackers@exmale.com?subjec=${encodeURIComponent('Inquiry aboiut profuct')}`
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      
      {/* Page Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.imageUrl} // replace with your image path
              alt="Corrugated Boxes"
              className="w-full max-w-md rounded-xl shadow-sm"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Corrugated Packaging Boxes
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Classic Packers provides top-quality corrugated boxes designed to
              meet a wide array of packaging needs. Our boxes ensure durability,
              safety, and sustainability for transport and storage.
            </p>

            {/* Inquire Button */}
            <a href={emailLink}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Inquire Now
            </button>
            </a>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p><strong>Material:</strong>{product.specifications.Material}</p>
              <p><strong>Length:</strong>{product.specifications.Length}</p>
              <p><strong>Width:</strong> {product.specifications.Width}</p>
              <p><strong>Height:</strong> {product.specifications.Height}</p>
            </div>

            <div>
              <p><strong>Box Type:</strong>{product.specifications.BoxType}</p>
              <p><strong>Printing:</strong>{product.specifications.Printing}</p>
              <p><strong>Load Capacity:</strong>{product.specifications.LoadCapacity}</p>
              <p><strong>Eco-Friendly:</strong>{product.specifications.EcoFriendly}</p>
            </div>
          </div>
        </div>

        {/* Description & Use Case */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Product Description & Use Cases
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our corrugated boxes are engineered for strength and reliability,
            ensuring safe handling of goods during shipping and storage. Classic
            Packers offers both standard-size and fully customized packaging
            solutions to match your business needs while maintaining cost
            efficiency and sustainability.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Packaging for electronics and fragile goods</li>
            <li>Industrial and manufacturing shipments</li>
            <li>E-commerce and retail packaging</li>
            <li>Storage and logistics applications</li>
            <li>Custom branding and promotional packaging</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProductInfo;
