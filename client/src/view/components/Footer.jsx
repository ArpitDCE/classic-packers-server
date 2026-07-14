export default function Footer(){
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