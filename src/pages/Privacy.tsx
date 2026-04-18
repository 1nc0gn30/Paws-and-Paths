export const Privacy = () => {
  return (
    <div className="bg-white py-20 md:py-24">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <p>
            This website is operated by Paws & Paths Virginia Beach. We keep data collection minimal and use the waitlist form solely to collect email addresses for service availability updates.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">What We Collect</h2>
            <p>When you submit the waitlist form, we collect the email address you provide.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">How We Use It</h2>
            <p>We use waitlist emails only to notify you when openings or service updates are available.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Third-Party Processing</h2>
            <p>
              Form submissions are processed through Netlify Forms. Their platform may store form submission data to deliver and manage submissions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Policy Updates</h2>
            <p>We may update this policy as needed to reflect business or legal changes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
