import { Box, ShieldCheck, Users, Lightbulb, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Box,
      title: "Quality Manufacturing",
      description: "Hum behtareen aur bharosemand box banane ke liye state-of-the-art machinery ka istemal karte hain."
    },
    {
      icon: ShieldCheck,
      title: "Durability Guaranteed",
      description: "Hamare products ko kathor testing se guzara jaata hai taaki adhiktam mazbooti sunishchit ho sake."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Hum apne grahakon ke saath milkar kaam karte hain taaki unki zarooraton ke anusaar custom solutions de sakein."
    },
    {
      icon: Heart,
      title: "Sustainable Packaging",
      description: "100% recyclable aur eco-friendly solutions jo environment ko protekt karte hain."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Hum apne clients ko quick turnaround time dete hain bina quality compromise kiye."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nayi technologies aur ideas use karke hum best solutions provide karte hain."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Classic Packers mein Aapka Swagat Hai
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Corrugated packaging solutions mein aapka vishvasneeya saathi. Hum har size ke business ke liye high-quality, sustainable, aur kifayti packaging pradan karne ke liye samarpit hain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Factory Image Section */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
            <img
              className="w-full h-full object-cover"
              src="/images/factory-floor.jpg"
              alt="Factory floor"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1200x600/e0e7ff/3730a3?text=Our+Factory';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Humhare Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-500/50"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-white mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-orange-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10000+</div>
              <p className="text-orange-100">Orders Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-orange-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-orange-100">Customer Support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Apna Perfect Packaging Solution Dhundhe
          </h3>
          <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50">
            Contact Us Today →
          </a>
        </div>
      </div>
    </div>
  );
}