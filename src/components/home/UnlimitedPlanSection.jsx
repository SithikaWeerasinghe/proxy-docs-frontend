import { ArrowRight, Check } from 'lucide-react';

export default function UnlimitedPlanSection() {
  return (
    <section className="bg-[#FAFAFA] py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-200 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
              Unlimited Plan
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-8">
              Unlimited Rotating <br className="hidden md:block"/> Residential Proxies
            </h2>
            
            <div className="space-y-6 text-[#525252] text-lg leading-relaxed mb-10">
              <p>
                For operations that require continuous access without tracking bandwidth consumption, unlimited rotating residential proxies remove data limits entirely.
              </p>
              <p>
                Built on a pool of 1 million or more real residential peers updated daily, the plan supports rotating and static sessions with unlimited concurrent connections. Traffic routes through worldwide servers via HTTP, SOCKS5, and UDP protocols. Country-level targeting is available across all 195 countries.
              </p>
              <p>
                Suited for long-running automation, continuous monitoring, and high-frequency data collection where per-gigabyte billing creates unpredictable costs.
              </p>
            </div>

            <button className="px-8 py-4 bg-[#121118] text-white font-extrabold rounded-xl hover:bg-[#2A2932] transition-colors flex items-center gap-2">
              Get Unlimited Access <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right Pricing Card */}
          <div className="flex-1 w-full max-w-lg lg:max-w-md mx-auto lg:mr-0">
            <div className="bg-white rounded-[2.5rem] p-10 border-2 border-[#05C067] shadow-[0_20px_60px_rgba(5,192,103,0.15)] relative">
              
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#05C067] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Best Value
              </div>

              <div className="mb-2">
                <span className="text-sm font-bold text-[#A8A8A8] uppercase tracking-wider">Starting from</span>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-black text-[#121118]">$70</span>
                <span className="text-xl font-bold text-[#A8A8A8]">/day</span>
              </div>
              <p className="text-[#525252] font-medium mb-8">
                No per-GB billing. Unlimited traffic.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="font-extrabold text-[#525252]">1 Day</span>
                  <span className="font-extrabold text-[#121118]">$250/day</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="font-extrabold text-[#525252]">7 Days</span>
                  <span className="font-extrabold text-[#121118]">$100/day</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#E8FBF1] rounded-2xl border border-[#05C067]/30">
                  <span className="font-extrabold text-[#05C067]">30 Days</span>
                  <span className="font-extrabold text-[#05C067]">$70/day</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-[10px] font-black text-[#A8A8A8] uppercase tracking-widest mb-1">IP Pool</div>
                  <div className="font-bold text-[#121118] text-sm flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#05C067]"/> 1M+ peers</div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#A8A8A8] uppercase tracking-widest mb-1">Uptime</div>
                  <div className="font-bold text-[#121118] text-sm flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#05C067]"/> 99.9% SLA</div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#A8A8A8] uppercase tracking-widest mb-1">Protocols</div>
                  <div className="font-bold text-[#121118] text-sm flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#05C067]"/> HTTP &middot; SOCKS5 &middot; UDP</div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#A8A8A8] uppercase tracking-widest mb-1">Countries</div>
                  <div className="font-bold text-[#121118] text-sm flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#05C067]"/> 195</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
