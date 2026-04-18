import { motion } from 'motion/react';
import { Dog, Trash2, Sparkles, Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const ServiceCard = ({ title, description, price, features, icon: Icon, color }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col h-full"
  >
    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", color)}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 flex-grow">{description}</p>
    <div className="mb-8">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What's Included</p>
      <ul className="space-y-3">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-slate-700">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="pt-8 border-t border-slate-100">
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold">From {price}</span>
        <span className="text-slate-500">/visit</span>
      </div>
      <Link
        to="/contact"
        className="block w-full text-center bg-brand-500 text-white py-4 rounded-2xl font-bold hover:bg-brand-600 transition-colors"
      >
        Book This Service
      </Link>
    </div>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      title: "Dog Walking",
      description: "Energetic walks to keep your pup healthy, happy, and stimulated while you're away.",
      price: "$25",
      icon: Dog,
      color: "bg-brand-50 text-brand-600",
      features: [
        "30 or 60 minute walks",
        "GPS tracking & walk report",
        "Fresh water & treats",
        "Photo updates sent to you",
        "Socialization opportunities"
      ]
    },
    {
      title: "Poop Scoop Service",
      description: "Professional yard cleaning so you never have to worry about the mess again.",
      price: "$15",
      icon: Trash2,
      color: "bg-green-50 text-green-600",
      features: [
        "Weekly or bi-weekly visits",
        "Complete waste removal",
        "Eco-friendly disposal",
        "Gate security check",
        "Deodorizing treatment available"
      ]
    },
    {
      title: "Pet Sitting",
      description: "In-home visits to provide love, food, and companionship for your pets.",
      price: "$30",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600",
      features: [
        "Feeding & medication",
        "Playtime & cuddles",
        "Mail & plant care",
        "Overnight options",
        "All pets welcome"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We offer flexible plans designed to fit your busy lifestyle and your pet's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="mt-24 bg-brand-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Plan?</h2>
              <p className="text-brand-100 text-lg mb-8">
                Have multiple pets or need a specific schedule? We're happy to create a custom care package just for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
                alt="Happy dogs playing"
                className="rounded-3xl shadow-2xl rotate-3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-700 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
        </div>
      </div>
    </div>
  );
};
