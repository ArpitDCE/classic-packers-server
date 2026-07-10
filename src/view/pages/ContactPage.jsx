import {
  MapPin,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
export default function ContactPage (){
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
