import { ArrowRight } from 'lucide-react';

export default function QuickStartSection() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-100 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
          Quick Start
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-4">
          From signup to first request in under 5 minutes.
        </h2>
        <p className="text-lg text-[#525252] mb-16">
          No complex setup. No waiting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {/* Arrow connector lines for desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-1 border-t-2 border-dashed border-gray-200 z-0"></div>
          
          <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10 flex flex-col items-center hover:border-gray-300 transition-colors">
            <div className="text-[80px] leading-none font-black text-[#E8FBF1] mb-6 absolute top-4 right-8 -z-10 select-none">01</div>
            <div className="w-20 h-20 rounded-2xl bg-[#E8FBF1] text-[#05C067] font-black text-3xl flex items-center justify-center mb-8 border-4 border-white shadow-sm">1</div>
            <h4 className="font-extrabold text-2xl text-[#121118] mb-4">Create Your Account</h4>
            <p className="text-[#525252] leading-relaxed">
              Sign up in 30 seconds. No credit card required. Trial credits are available instantly upon registration.
            </p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10 flex flex-col items-center hover:border-gray-300 transition-colors">
            <div className="text-[80px] leading-none font-black text-[#EEF3FF] mb-6 absolute top-4 right-8 -z-10 select-none">02</div>
            <div className="w-20 h-20 rounded-2xl bg-[#EEF3FF] text-[#246BFD] font-black text-3xl flex items-center justify-center mb-8 border-4 border-white shadow-sm">2</div>
            <h4 className="font-extrabold text-2xl text-[#121118] mb-4">Choose Your Proxy Type</h4>
            <p className="text-[#525252] leading-relaxed">
              Select from Residential, Datacenter, Mobile, or IPv6. Configure targeting by country, city, or ISP.
            </p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10 flex flex-col items-center hover:border-gray-300 transition-colors">
            <div className="text-[80px] leading-none font-black text-purple-50 mb-6 absolute top-4 right-8 -z-10 select-none">03</div>
            <div className="w-20 h-20 rounded-2xl bg-purple-50 text-purple-600 font-black text-3xl flex items-center justify-center mb-8 border-4 border-white shadow-sm">3</div>
            <h4 className="font-extrabold text-2xl text-[#121118] mb-4">Connect and Start</h4>
            <p className="text-[#525252] leading-relaxed">
              Copy your credentials and integrate using HTTP or SOCKS5. Configuration takes under 5 minutes.
            </p>
          </div>
        </div>

        <button className="px-8 py-4 bg-white border-2 border-[#121118] text-[#121118] font-extrabold rounded-xl hover:bg-[#121118] hover:text-white transition-all shadow-sm flex items-center gap-2 mx-auto">
          Start for free - no credit card <ArrowRight className="h-5 w-5" />
        </button>

      </div>
    </section>
  );
}
