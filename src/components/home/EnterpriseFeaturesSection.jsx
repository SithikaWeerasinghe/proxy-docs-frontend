import { Shield, ShieldAlert, HeadphonesIcon, Zap, Globe2, Activity } from 'lucide-react';

export default function EnterpriseFeaturesSection() {
  const features = [
    {
      title: 'Backconnect Residential Infrastructure',
      desc: 'Seamlessly route requests through a single endpoint. Our gateway handles IP rotation, session management, and load balancing automatically.',
      icon: Shield
    },
    {
      title: 'Strict No-Log Policy',
      desc: 'We operate with a strict no-log policy for residential traffic. Your scraping targets, request headers, and data payloads are never stored.',
      icon: ShieldAlert
    },
    {
      title: 'Technical Support & Integration',
      desc: '24/7 technical support from engineers who understand proxy infrastructure, anti-bot bypass, and scalable scraping architectures.',
      icon: HeadphonesIcon
    },
    {
      title: 'Optimized Routing & Bandwidth',
      desc: 'Advanced routing algorithms automatically select the fastest available residential peers to minimize latency and maximize success rates.',
      icon: Zap
    },
    {
      title: 'Global Targeting Controls',
      desc: 'Target specific countries, states, cities, or ASNs with a simple parameter change in your request credentials.',
      icon: Globe2
    },
    {
      title: '99.9% Uptime Guarantee',
      desc: 'Enterprise-grade SLAs ensure your automation never stops. Real-time status monitoring and redundant infrastructure globally.',
      icon: Activity
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-[#E8FBF1] text-[#05C067] font-black text-xs uppercase tracking-widest mb-6">
            Built For Professional Use
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-6">
            Enterprise-Grade Residential Proxy Network
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed">
            Built for rotating and sticky sessions, large-scale scraping operations, and professional data access at any volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#05C067]/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#E8FBF1] flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-[#05C067]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#121118] mb-4">{feature.title}</h3>
              <p className="text-[#525252] leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
