import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './view/components/Navbar';
import Footer from './view/components/Footer';
import ProductsPage from "./view/pages/ProductsPage";
import ContactPage from "./view/pages/ContactPage";
import AboutPage from "./view/pages/AboutPage";
import ProductInfo from './view/components/ProductInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<ProductsPage />} />
            <Route path="/home" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<ProductInfo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
