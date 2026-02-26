export default function CTASection() {
  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="relative w-full max-w-[896px] overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-16 text-center" style={{ maxHeight: '432.54px' }}>
        {/* Headline */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Transform Your Future?
        </h2>
        
        {/* Subheadline */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Join thousands of learners earning real rewards while building skills that employers value.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <button className="flex h-10 w-[220px] items-center justify-center gap-2 rounded-lg bg-white px-4 text-center text-sm font-medium leading-5 transition hover:bg-gray-50" style={{ color: '#0070B6' }}>
            Start Your Journey Now →
          </button>
          <button className="flex h-10 w-[220px] items-center justify-center gap-2 rounded-lg border-2 border-white/50 bg-white/30 px-4 text-center text-sm font-medium leading-5 text-white backdrop-blur-md transition hover:bg-white/40">
            Explore Courses
          </button>
        </div>
        
        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-full max-w-3xl bg-white/20" />
        
        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          <div>
            <div className="text-2xl font-bold text-white sm:text-3xl">50K+</div>
            <div className="mt-1 text-xs text-white/70 sm:text-sm">Active Learners</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white sm:text-3xl">45+</div>
            <div className="mt-1 text-xs text-white/70 sm:text-sm">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white sm:text-3xl">$2M+</div>
            <div className="mt-1 text-xs text-white/70 sm:text-sm">Paid Out</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white sm:text-3xl">4.8★</div>
            <div className="mt-1 text-xs text-white/70 sm:text-sm">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
