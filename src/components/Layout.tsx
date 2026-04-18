import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Waitlist', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Dog className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Paws & Paths</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-500",
                  location.pathname === link.path ? "text-brand-500" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-slate-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-500 text-white py-3 rounded-xl font-semibold"
            >
              Join Waitlist
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Dog className="text-brand-500 w-6 h-6" />
              <span className="font-display font-bold text-xl">Paws & Paths</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Virginia Beach's most trusted pet care and waste removal service. Keeping your yard clean and your pups happy since 2020.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-brand-500">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500">Waitlist</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>Dog Walking</li>
              <li>Poop Scoop Service</li>
              <li>Pet Sitting</li>
              <li>Yard Deodorizing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Join the Waitlist</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Be first to know when new service slots open up in Virginia Beach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-500 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-brand-600 transition-colors"
            >
              Submit Your Email
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Paws & Paths Virginia Beach. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
