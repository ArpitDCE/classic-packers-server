import { Box, ShieldCheck, Users } from 'lucide-react';
export default function AboutPage(){
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