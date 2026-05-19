export default function ProxyComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-100 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
            Proxy Comparison
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight">
            Residential Proxies <span className="font-light text-[#A8A8A8]">vs</span> Datacenter Proxies
          </h2>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[700px] bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-gray-200">
                  <th className="w-1/3 p-6 text-sm font-extrabold text-[#A8A8A8] uppercase tracking-wider">Feature</th>
                  <th className="w-1/3 p-6 text-xl font-extrabold text-[#121118]">
                    <span className="inline-block px-3 py-1 bg-[#E8FBF1] text-[#05C067] rounded-md text-xs mr-3 mb-1 uppercase tracking-widest">Recommended</span>
                    <br className="hidden md:block" />
                    Residential
                  </th>
                  <th className="w-1/3 p-6 text-xl font-extrabold text-[#121118]">
                    <span className="inline-block px-3 py-1 bg-[#EEF3FF] text-[#246BFD] rounded-md text-xs mr-3 mb-1 uppercase tracking-widest">Alternative</span>
                    <br className="hidden md:block" />
                    Datacenter
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-[#FAFAFA]/50 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">IP Source</td>
                  <td className="p-6 text-[#525252]">Real residential devices</td>
                  <td className="p-6 text-[#525252]">Server-hosted IPs</td>
                </tr>
                <tr className="bg-[#FAFAFA]/30 hover:bg-[#FAFAFA]/70 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">Detection Risk</td>
                  <td className="p-6 font-bold text-[#05C067]">Low</td>
                  <td className="p-6 font-bold text-orange-500">Higher</td>
                </tr>
                <tr className="hover:bg-[#FAFAFA]/50 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">Speed</td>
                  <td className="p-6 text-[#525252]">Moderate</td>
                  <td className="p-6 font-bold text-[#246BFD]">Fast</td>
                </tr>
                <tr className="bg-[#FAFAFA]/30 hover:bg-[#FAFAFA]/70 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">Best For</td>
                  <td className="p-6 text-[#525252]">Scraping, account management, ad verification</td>
                  <td className="p-6 text-[#525252]">Speed-sensitive tasks, low-risk targets</td>
                </tr>
                <tr className="hover:bg-[#FAFAFA]/50 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">Targeting</td>
                  <td className="p-6 font-bold text-[#05C067]">Country, state, city, ISP</td>
                  <td className="p-6 text-[#525252]">Country level</td>
                </tr>
                <tr className="bg-[#FAFAFA]/30 hover:bg-[#FAFAFA]/70 transition-colors">
                  <td className="p-6 font-bold text-[#121118]">Protocols</td>
                  <td className="p-6 text-[#525252]">HTTP, SOCKS5</td>
                  <td className="p-6 text-[#525252]">HTTP, SOCKS5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
