import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-white py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Waitlist</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Drop your email below and we will reach out when spots open.
          </p>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 md:py-10"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-green-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">You are on the list.</h2>
              <p className="text-slate-600">Thanks. We will email you when availability opens.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-brand-600 font-bold hover:underline"
              >
                Submit another email
              </button>
            </motion.div>
          ) : (
            <form
              name="waitlist"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-500 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2"
              >
                Join Waitlist
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
