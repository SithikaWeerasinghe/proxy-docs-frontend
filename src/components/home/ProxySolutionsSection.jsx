import { ArrowRight, Check } from 'lucide-react';
import { proxyProducts } from '../../data/proxyProducts';

export default function ProxySolutionsSection() {
  const accentColors = {
    green: { bg: 'bg-[#05C067]', text: 'text-[#05C067]', lightBg: 'bg-[#E8FBF1]', blob: 'from-[#05C067]/20 to-[#05C067]/5' },
    blue: { bg: 'bg-[#246BFD]', text: 'text-[#246BFD]', lightBg: 'bg-[#EEF3FF]', blob: 'from-[#246BFD]/20 to-[#246BFD]/5' },
    red: { bg: 'bg-rose-500', text: 'text-rose-500', lightBg: 'bg-rose-50', blob: 'from-rose-500/20 to-rose-500/5' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', lightBg: 'bg-purple-50', blob: 'from-purple-500/20 to-purple-500/5' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', lightBg: 'bg-orange-50', blob: 'from-orange-500/20 to-orange-500/5' },
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-100 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
            Proxy Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-6">
            Every proxy type, one platform
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed">
            Select from residential, datacenter, mobile, or IPv6 proxies. Each product is built for specific use cases across scraping, automation, and structured data collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proxyProducts.map((product) => {
            const theme = accentColors[product.accent] || accentColors.green;
            
            return (
              <div key={product.id} className="relative bg-white rounded-[2.5rem] border border-gray-200 p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col group">
                
                {/* Decorative Blob */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${theme.blob} blur-3xl group-hover:scale-110 transition-transform duration-700`}></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`px-4 py-1.5 rounded-lg font-black text-xs tracking-widest ${theme.lightBg} ${theme.text}`}>
                      {product.tag}
                    </span>
                    {product.badge && (
                      <span className="px-4 py-1.5 rounded-lg font-black text-xs tracking-widest bg-[#121118] text-white">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-[#121118] mb-3">{product.name}</h3>
                  <div className="text-2xl font-black text-[#121118] mb-6">{product.price}</div>
                  
                  <p className="text-[#525252] text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                        <Check className={`h-3.5 w-3.5 ${theme.text}`} />
                        <span className="text-xs font-bold text-[#525252]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className={`inline-flex items-center gap-2 font-bold ${theme.text} hover:opacity-80 transition-opacity`}>
                    Learn more <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
