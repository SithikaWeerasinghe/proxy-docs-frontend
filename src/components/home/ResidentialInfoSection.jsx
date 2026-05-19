import { Network, RefreshCw } from 'lucide-react';

export default function ResidentialInfoSection() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-200 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
            Residential Proxies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight">
            What Are Residential Proxies?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#05C067]/30 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-[#E8FBF1] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Network className="h-8 w-8 text-[#05C067]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#121118] mb-4">Definition</h3>
            <p className="text-[#525252] text-lg leading-relaxed">
              A residential proxy is an IP address assigned to a real residential device by a network provider. When traffic routes through a residential proxy, websites see a legitimate home IP address rather than a server or data center address. This makes residential proxies significantly harder to detect and block compared to other proxy types.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#05C067]/30 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-[#EEF3FF] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <RefreshCw className="h-8 w-8 text-[#246BFD]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#121118] mb-4">How They Work</h3>
            <p className="text-[#525252] text-lg leading-relaxed">
              Rotating residential proxies assign a new IP address per request or per session based on IP rotation logic configured at the gateway level. A backconnect proxy service manages this rotation automatically through a single endpoint, removing the need to handle large IP lists manually.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
