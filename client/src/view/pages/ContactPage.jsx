import {
  MapPin,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  Clock,
} from 'lucide-react';

export default function ContactPage() {
  const contactInfo = {
    phone: "+919876543210",
    email: "sales@classicpackers.com",
    address: "123 Industrial Area, Sector 18, Gurugram, Haryana 122001, India"
  };

  const whatsappLink = `https://wa.me/${contactInfo.phone}?text=${encodeURIComponent("Hello Classic Packers, I'm interested in your products.")}`;
  const emailLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Inquiry about Corrugated Boxes")}`;

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp par Judein",
      color: "bg-green-500 hover:bg-green-600",
      link: whatsappLink,
      external: true
    },
    {
      icon: Mail,
      title: "Hamein Email Bhejein",
      color: "bg-blue-500 hover:bg-blue-600",
      link: emailLink,
      external: false
    },
    {
      icon: Phone,
      title: "Phone Call Karein",
      color: "bg-purple-500 hover:bg-purple-600",
      link: `tel:${contactInfo.phone}`,
      external: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            Hum aapke saath connect hone ke liye excited hain
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hum aapki sahayata ke liye yahan hain. Aapke kisi bhi prashn ka uttar dene mein hamein khushi hogi.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <a href={emailLink} className="text-blue-600 hover:text-blue-700 font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-purple-600 hover:text-purple-700 font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Methods */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Humse seedha sampark karein</h3>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    {...(method.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className={`flex items-center gap-4 p-4 ${method.color} text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group`}
                  >
                    <Icon className="h-6 w-6 flex-shrink-0" />
                    <span className="flex-1">{method.title}</span>
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>

            {/* Quick Message Form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-slate-900 mb-4">Ya Hamein Direct Message Bhejein</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Aapka Naam"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Aapka Email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Aapka Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Zyada Jankari Ke Liye</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Delivery Time Kya Hai?",
                a: "Zyada tar orders 5-7 working days mein deliver ho jaate hain. Custom orders ke liye 10-15 din lag sakte hain."
              },
              {
                q: "Minimum Order Quantity?",
                a: "Hamara minimum order 100 boxes se shuru hota hai. Custom requirements ke liye hum flexible ho sakte hain."
              },
              {
                q: "Payment Options?",
                a: "Hum cash, bank transfer, aur online payment methods accept karte hain."
              },
              {
                q: "Samples Available?",
                a: "Haan, aap free sample request kar sakte hain. Bas aapko shipping charge dena padega."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-1">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 flex gap-2">
                  <span className="text-orange-500 font-bold">A:</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
