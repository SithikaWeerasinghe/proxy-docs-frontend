import { useState } from 'react';
import { ShoppingCart, Share2, LineChart, Target, Search, Lock, ChevronDown } from 'lucide-react';

export default function IndustryAccordionSection() {
  const [openItem, setOpenItem] = useState('Market Research');

  const industries = [
    {
      id: 'Ecommerce',
      title: 'Ecommerce',
      icon: ShoppingCart,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      desc: 'Monitor competitors, track pricing changes, and automate inventory checks across global ecommerce platforms without getting blocked by anti-bot systems.'
    },
    {
      id: 'Social Media Marketing',
      title: 'Social Media Marketing',
      icon: Share2,
      color: 'text-pink-500',
      bg: 'bg-pink-50',
      desc: 'Manage multiple social media accounts securely. Run automated campaigns and scrape public engagement metrics safely with rotating mobile or residential IPs.'
    },
    {
      id: 'Market Research',
      title: 'Market Research',
      icon: LineChart,
      color: 'text-[#05C067]',
      bg: 'bg-[#E8FBF1]',
      desc: 'Extract structured data from localized search results and web pages. Bypass geo-restrictions to gather accurate market intelligence and consumer trends globally.'
    },
    {
      id: 'Ad Tech',
      title: 'Ad Tech',
      icon: Target,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      desc: 'Verify ad placements, check affiliate links, and monitor localized campaigns to prevent fraud and ensure brand compliance across different regions.'
    },
    {
      id: 'SEO Monitoring',
      title: 'SEO Monitoring',
      icon: Search,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      desc: 'Track search engine rankings and scrape SERP data from specific cities or countries. Avoid captchas and IP bans while monitoring keyword performance.'
    },
    {
      id: 'Cybersecurity',
      title: 'Cybersecurity',
      icon: Lock,
      color: 'text-gray-700',
      bg: 'bg-gray-100',
      desc: 'Conduct penetration testing, monitor for data breaches, and gather threat intelligence anonymously using a diverse, untraceable IP pool.'
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex-1 lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-gray-200 text-[#525252] font-black text-xs uppercase tracking-widest mb-6">
              Built For Scale Across Industries
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-6">
              Every Industry. <br className="hidden lg:block" />One Network.
            </h2>
            <p className="text-lg text-[#525252] leading-relaxed mb-10">
              Residential proxy infrastructure built for automation, anonymity, and reliable data access across industries with high detection sensitivity.
            </p>
            
            {/* Illustration Placeholder */}
            <div className="hidden lg:flex w-full h-64 bg-white rounded-3xl border border-gray-200 items-center justify-center shadow-sm relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#05C067]/10 to-[#246BFD]/10"></div>
               <div className="text-8xl relative z-10 opacity-80 filter drop-shadow-md">🌐</div>
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="flex-1 w-full space-y-4">
            {industries.map((item) => {
              const isOpen = openItem === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#05C067]/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 focus:outline-none"
                    onClick={() => setOpenItem(isOpen ? '' : item.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#121118]">{item.title}</h3>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-[#A8A8A8] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#05C067]' : ''}`} />
                  </button>
                  
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pl-16">
                      <p className="text-[#525252] leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <a href="#" className="inline-flex items-center text-sm font-bold text-[#05C067] hover:text-[#04a055] transition-colors">
                        Explore use case &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
