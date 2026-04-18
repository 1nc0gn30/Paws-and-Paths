import { Heart, Users, Award, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white">
      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=1000"
                alt="Our founder with a dog"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Story</h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Paws & Paths was born from a simple observation: Virginia Beach families love their pets, but life can get incredibly busy.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in 2020, we started with a single dog walker and a mission to provide the highest quality pet care in the 757. Today, we're a team of dedicated animal lovers serving hundreds of happy clients across Virginia Beach.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-brand-500 mb-2">500+</h4>
                  <p className="text-slate-500 font-medium">Happy Pups</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-brand-500 mb-2">10k+</h4>
                  <p className="text-slate-500 font-medium">Walks Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These principles guide everything we do, from the first walk to the final yard cleanup.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Love", desc: "We treat every pet like our own family member." },
              { icon: ShieldCheck, title: "Safety", desc: "Your pet's well-being is our absolute priority." },
              { icon: Users, title: "Community", desc: "Proudly serving and supporting Virginia Beach." },
              { icon: Award, title: "Excellence", desc: "Committed to the highest standards of care." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-brand-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
