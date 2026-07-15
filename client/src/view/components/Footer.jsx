export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mb-4">
              Classic Packers
            </h3>
            <p className="text-gray-400 text-sm">
              Premium corrugated packaging solutions for all your business needs.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/home" className="hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 text-sm">
              Email: sales@classicpackers.com<br />
              Phone: +91 9876 543 210
            </p>
          </div>
        </div>
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Classic Packers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}