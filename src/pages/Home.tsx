import { motion } from 'motion/react';
import { Shield, Clock, Heart, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-brand-600" />
              <span>#1 Pet Service in Virginia Beach</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
              Happy Paws, <br />
              <span className="text-brand-500">Clean Yards.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Professional dog walking and pet waste removal services tailored for Virginia Beach families. We handle the mess, you enjoy the love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200"
                alt="Happy dog being walked in Virginia Beach"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl">
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Weekly Cleanup</p>
                  <p className="text-lg font-bold text-slate-900">Completed!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Reliable & Punctual",
      description: "We show up on time, every time. Your schedule is our priority.",
      icon: Clock,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Fully Insured",
      description: "Rest easy knowing your property and pets are protected by full coverage.",
      icon: Shield,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Pet First Approach",
      description: "We don't just walk dogs; we build friendships with every pup we meet.",
      icon: Heart,
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Virginia Beach Trusts Us</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We've built our reputation on quality service and a genuine love for animals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feature.color)}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Professional Dog Walking & Poop Scoop Services in Virginia Beach</h2>
          <p className="text-lg text-slate-600 mb-6">
            Are you looking for a reliable dog walker in Virginia Beach? Or maybe you're tired of the weekly chore of cleaning up your yard? Paws & Paths is here to help. We provide top-rated pet care services across the 757, from the Oceanfront to Town Center and beyond.
          </p>
          <p className="text-lg text-slate-600">
            Our team is dedicated to keeping Virginia Beach's neighborhoods clean and its dogs active. Whether you need a daily walk for your energetic pup or a weekly poop scoop service to keep your lawn pristine, we have a plan that fits your needs.
          </p>
        </div>
      </section>
    </>
  );
};
