import { Link } from 'react-router-dom';
import { Star, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Reviews Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                <span className="font-bold text-[#121118] text-sm">Trustpilot</span>
                <div className="flex text-[#00b67a]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                <span className="font-bold text-[#121118] text-sm">G2</span>
                <div className="flex text-[#FF492C]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#121118] tracking-tight mb-8 leading-[1.1]">
              Residential Proxies That Do <span className="text-[#05C067]">Not</span> Get <span className="text-[#05C067]">Blocked</span>
            </h1>
            
            <p className="text-xl text-[#525252] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Access 20M+ real residential IPs across 195 countries. Rotating proxies with backconnect support, built for uninterrupted data collection and automation.
            </p>
            
            <ul className="text-left space-y-4 mb-12 max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-[#121118] font-bold">
                <CheckCircle2 className="h-6 w-6 text-[#05C067]" /> 20M+ Residential IPs &middot; 195 Countries
              </li>
              <li className="flex items-center gap-3 text-[#121118] font-bold">
                <CheckCircle2 className="h-6 w-6 text-[#05C067]" /> Rotating and Sticky Sessions &middot; Backconnect
              </li>
              <li className="flex items-center gap-3 text-[#121118] font-bold">
                <CheckCircle2 className="h-6 w-6 text-[#05C067]" /> HTTP and SOCKS5 Support
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-4">
              <Link to="/pricing" className="px-10 py-5 bg-[#05C067] text-white font-extrabold text-lg rounded-xl hover:bg-[#04a055] transition-all shadow-[0_8px_25px_rgba(5,192,103,0.3)] hover:shadow-[0_12px_30px_rgba(5,192,103,0.4)] text-center">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="px-10 py-5 bg-white border-2 border-gray-200 text-[#121118] font-extrabold text-lg rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-center">
                View Pricing
              </Link>
            </div>
            
            <p className="text-sm text-[#A8A8A8] font-medium text-center lg:text-left">
              Free trial &middot; No credit card required
            </p>
          </div>

          {/* Right Illustration Card */}
          <div className="flex-1 w-full relative max-w-lg lg:max-w-none mx-auto">
            <div className="bg-[#FAFAFA] rounded-[3rem] p-10 h-[500px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden flex items-center justify-center isolate">
              
              {/* Simple CSS vector placeholder for Cat */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 -z-10">
                 <div className="w-64 h-64 bg-[#05C067] rounded-full blur-3xl"></div>
                 <div className="w-48 h-48 bg-[#246BFD] rounded-full blur-3xl absolute bottom-10 left-10"></div>
              </div>
              
              <div className="text-[120px]">🐱</div>

              {/* Floating Mini Cards */}
              <div className="absolute top-12 -left-4 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-1 animate-bounce" style={{animationDuration: '3s'}}>
                <span className="text-xs font-bold text-[#A8A8A8] uppercase tracking-wider">IP Pool</span>
                <span className="text-xl font-extrabold text-[#121118]">20M+ IPs</span>
              </div>

              <div className="absolute bottom-24 -right-4 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-[#A8A8A8] uppercase tracking-wider text-right">Avg Response</span>
                <span className="text-xl font-extrabold text-[#121118] text-right">~0.5s</span>
              </div>
              
              <div className="absolute top-8 right-8 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#05C067] animate-pulse"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#246BFD] uppercase tracking-widest">IT Outsourcing</span>
                  <span className="text-xs font-bold text-[#121118]">Efficient / Fast</span>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
