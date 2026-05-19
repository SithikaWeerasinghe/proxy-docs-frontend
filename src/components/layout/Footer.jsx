import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-[#121118] p-2 rounded-xl group-hover:bg-[#05C067] transition-colors shadow-sm">
                <Hexagon className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#121118]">CAT PROXIES</span>
            </Link>
            <div className="space-y-2 mb-8">
              <a href="mailto:support@catproxies.com" className="block text-[#525252] font-medium hover:text-[#05C067] transition-colors">support@catproxies.com</a>
              <a href="#" className="block text-[#525252] font-medium hover:text-[#05C067] transition-colors">Live chat support</a>
            </div>
            <div className="flex gap-3">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#121118] hover:text-white hover:bg-[#246BFD] hover:border-[#246BFD] transition-all cursor-pointer">
                <span className="font-bold text-sm">E</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#121118] hover:text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all cursor-pointer">
                <span className="font-bold text-sm">T</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#121118] hover:text-white hover:bg-[#5865F2] hover:border-[#5865F2] transition-all cursor-pointer">
                <span className="font-bold text-sm">D</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-extrabold text-[#121118] mb-6">Proxies</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Residential Proxies</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Unlimited Residential</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Data Center Proxies</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">IPv6 Proxies</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">ISP Proxies</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Mobile Proxies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-[#121118] mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Contact Us</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Ethics</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">FAQ</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Partners</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Blog</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Become A Reseller</Link></li>
              <li><Link to="/docs" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Reseller API</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-[#121118] mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">E-Commerce</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Social Media Marketing</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Cybersecurity</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Market Research</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">SEO Monitoring</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Ad Tech</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-[#121118] mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Terms And Conditions</Link></li>
              <li><Link to="/privacy" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Refund Policy</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Fair Usage Policy</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Shipping Terms</Link></li>
              <li><Link to="#" className="text-[#525252] hover:text-[#05C067] transition-colors font-medium">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#A8A8A8] font-medium">
            &copy; 2026 CAT PROXIES. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'DISCOVER', 'Apple Pay', 'G Pay', 'BTC', 'ETH'].map(badge => (
              <span key={badge} className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-black text-[#A8A8A8] tracking-wider uppercase">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
