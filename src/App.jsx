import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Box, Users, ShieldCheck, ArrowRight } from 'lucide-react';

// --- Static Data (No Database Needed) ---

// Aap apne products ki details yahan daalein.
// Image path ko dhyan se dekhein. Aapko 'public/images/' folder mein images save karni hongi.
const staticProducts = [
  {
    id: '1',
    name: 'Regular Slotted Container (RSC)',
    description: 'Sabse aam aur har tarah ki shipping ke liye upyukt box style.',
    imageUrl: '/images/rsc-box.jpg' // Path to local image
  },
  {
    id: '2',
    name: 'Full Overlap Container (FOL)',
    description: 'Bahari flaps poori tarah se overlap hote hain, jo extra mazbooti dete hain.',
    imageUrl: '/images/fol-box.jpg' // Path to local image
  },
  {
    id: '3',
    name: 'Die-Cut Custom Boxes',
    description: 'Aapke specific products ke liye custom shapes aur sizes.',
    imageUrl: '/images/die-cut-box.jpg' // Path to local image
  },
  {
    id: '4',
    name: 'Corrugated Mailers',
    description: 'E-commerce aur subscription boxes ke liye perfect hai.',
    imageUrl: '/images/mailer-box.jpg' // Path to local image
  },
  {
    id: '5',
    name: 'Printed Boxes',
    description: 'Apne brand ki pehchan banane ke liye custom printed boxes.',
    imageUrl: '/images/printed-box.jpg' // Path to local image
  },
  {
    id: '6',
    name: 'Heavy-Duty Boxes',
    description: 'Bhaari saaman ki surakshit shipping ke liye double-wall construction.',
    imageUrl: '/images/heavy-duty-box.jpg' // Path to local image
  }
];


// --- Components (All in one file) ---

// 1. Navbar Component
const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Products', page: 'products' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={() => setPage('products')} className="text-2xl font-bold text-gray-800 flex items-center">
              <Box className="w-8 h-8 text-indigo-600 mr-2" />
              Classic Packers
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={() => setPage(link.page)}
                  className="text-gray-600 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={() => {
                  setPage(link.page);
                  setIsOpen(false);
                }}
                className="text-gray-600 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Product Card Component
const ProductCard = ({ product }) => {
  return (
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
  );
};

// 3. Footer Component
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Classic Packers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


// --- Pages ---

// 1. Products Page
const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Aapke har packaging zaroorat ke liye high-quality corrugated boxes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// 2. About Us Page
const AboutPage = () => {
  const features = [
    { icon: Box, title: "Quality Manufacturing", description: "Hum behtareen aur bharosemand box banane ke liye state-of-the-art machinery ka istemal karte hain." },
    { icon: ShieldCheck, title: "Durability Guaranteed", description: "Hamare products ko kathor testing se guzara jaata hai taaki adhiktam mazbooti sunishchit ho sake." },
    { icon: Users, title: "Customer Focused", description: "Hum apne grahakon ke saath milkar kaam karte hain taaki unki zarooraton ke anusaar custom solutions de sakein." },
  ];
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Classic Packers mein Aapka Swagat Hai
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Corrugated packaging solutions mein aapka vishvasneeya saathi. Hum har size ke business ke liye high-quality, sustainable, aur kifayti packaging pradan karne ke liye samarpit hain.
          </p>
        </div>
        <div className="mt-12">
            <img 
                className="rounded-lg shadow-xl mx-auto"
                src="/images/factory-floor.jpg"
                alt="Factory floor" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/e0e7ff/3730a3?text=Our+Factory'; }}
            />
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Contact Page
const ContactPage = () => {
    // IMPORTANT: Apne actual phone numbers aur email se replace karein
    const contactInfo = {
        phone: "+919876543210", // Apna WhatsApp number daalein
        smsPhone: "+919876543210", // Apna SMS number daalein
        email: "sales@classicpackers.com", // Apna email address daalein
        address: "123 Industrial Area, Sector 18, Gurugram, Haryana 122001, India"
    };

    const whatsappLink = `https://wa.me/${contactInfo.phone}?text=${encodeURIComponent("Hello Classic Packers, I'm interested in your products.")}`;
    const emailLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Inquiry about Corrugated Boxes")}`;
    const smsLink = `sms:${contactInfo.smsPhone}?&body=${encodeURIComponent("Hello Classic Packers, I have an inquiry.")}`;

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in Touch</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Hum aapki sahayata ke liye yahan hain. Aapke kisi bhi prashn ka uttar dene mein hamein khushi hogi.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-gray-400" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>{contactInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">Humse seedha sampark karein</h3>
                        <div className="mt-6 space-y-4">
                           <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
                                <MessageCircle className="h-6 w-6 mr-3"/>
                                <span className="font-semibold">WhatsApp par Judein</span>
                                <ArrowRight className="ml-auto h-5 w-5"/>
                           </a>
                           <a href={emailLink} className="flex items-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                                <Mail className="h-6 w-6 mr-3"/>
                                <span className="font-semibold">Hamein Email Bhejein</span>
                                 <ArrowRight className="ml-auto h-5 w-5"/>
                           </a>
                           <a href={smsLink} className="flex items-center p-4 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors">
                                <Phone className="h-6 w-6 mr-3"/>
                                <span className="font-semibold">Hamein SMS Bhejein</span>
                                 <ArrowRight className="ml-auto h-5 w-5"/>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component with Simple Routing
function App() {
  const [page, setPage] = useState('products'); // Default page

  const renderPage = () => {
    switch (page) {
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <ProductsPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setPage={setPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
