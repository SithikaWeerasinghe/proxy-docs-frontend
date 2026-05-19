import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="bg-[#121118] p-2 rounded-xl group-hover:bg-[#05C067] transition-colors shadow-sm">
                <Hexagon className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#121118]">CAT PROXIES</span>
            </Link>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 pl-4 flex-1 justify-center">
            
            {/* Proxies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('proxies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-base font-bold transition-colors ${activeDropdown === 'proxies' ? 'text-[#05C067]' : 'text-[#525252] hover:text-[#05C067]'}`}>
                Proxies <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'proxies' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'proxies' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] pt-4">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 grid grid-cols-2 gap-4">
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">Residential Proxies</div>
                      <div className="text-xs text-[#A8A8A8]">20M+ rotating IPs globally</div>
                    </Link>
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">Unlimited Residential</div>
                      <div className="text-xs text-[#A8A8A8]">Unmetered traffic on 1M+ peers</div>
                    </Link>
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">Datacenter Proxies</div>
                      <div className="text-xs text-[#A8A8A8]">High-speed server IPs</div>
                    </Link>
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">IPv6 Proxies</div>
                      <div className="text-xs text-[#A8A8A8]">Scalable IPv6 infrastructure</div>
                    </Link>
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">ISP Proxies</div>
                      <div className="text-xs text-[#A8A8A8]">Static residential IPs</div>
                    </Link>
                    <Link to="#" className="p-3 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="font-bold text-[#121118] mb-1">Mobile Proxies</div>
                      <div className="text-xs text-[#A8A8A8]">Real 3G/4G/5G carrier IPs</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="px-4 py-2 text-base font-bold text-[#525252] hover:text-[#05C067] transition-colors">Pricing</Link>
            
            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('usecases')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-base font-bold transition-colors ${activeDropdown === 'usecases' ? 'text-[#05C067]' : 'text-[#525252] hover:text-[#05C067]'}`}>
                Use Cases <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'usecases' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'usecases' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] pt-4">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-4 grid grid-cols-1 gap-1">
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">E-Commerce</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Social Media Marketing</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Market Research</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Cybersecurity</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">SEO Monitoring</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Ad Tech</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-base font-bold transition-colors ${activeDropdown === 'resources' ? 'text-[#05C067]' : 'text-[#525252] hover:text-[#05C067]'}`}>
                Resources <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] pt-4">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-4 grid grid-cols-1 gap-1">
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">FAQ</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Blog</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Partners</Link>
                    <Link to="/docs" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Reseller API</Link>
                    <Link to="/contact" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">Support</Link>
                    <Link to="#" className="px-4 py-3 hover:bg-[#FAFAFA] rounded-xl font-bold text-[#121118] transition-colors">IPv6 Compatibility Checker</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="px-4 py-2 text-base font-bold text-[#525252] hover:text-[#05C067] transition-colors">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/dashboard" // Assuming sign up goes to dashboard for now
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-100 text-sm font-extrabold rounded-xl text-[#121118] bg-white hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm"
            >
              Sign up
            </Link>
            {/* TODO: Connect signup/login to backend auth later. */}
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-sm font-extrabold rounded-xl text-white bg-[#05C067] hover:bg-[#04a055] transition-all shadow-[0_4px_14px_rgba(5,192,103,0.3)] hover:shadow-[0_6px_20px_rgba(5,192,103,0.4)]"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#121118] hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <div className="space-y-1">
              <button onClick={() => toggleDropdown('m-proxies')} className="w-full flex justify-between items-center px-4 py-4 rounded-xl text-lg font-bold text-[#121118] hover:bg-gray-50">
                Proxies <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'm-proxies' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'm-proxies' && (
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link to="#" onClick={closeMenu} className="block py-2 text-[#525252] font-medium">Residential Proxies</Link>
                  <Link to="#" onClick={closeMenu} className="block py-2 text-[#525252] font-medium">Unlimited Residential</Link>
                  <Link to="#" onClick={closeMenu} className="block py-2 text-[#525252] font-medium">Datacenter Proxies</Link>
                  <Link to="#" onClick={closeMenu} className="block py-2 text-[#525252] font-medium">Mobile Proxies</Link>
                </div>
              )}
            </div>
            
            <Link to="/pricing" onClick={closeMenu} className="block px-4 py-4 rounded-xl text-lg font-bold text-[#121118] hover:bg-gray-50">Pricing</Link>
            
            <Link to="/contact" onClick={closeMenu} className="block px-4 py-4 rounded-xl text-lg font-bold text-[#121118] hover:bg-gray-50">Contact</Link>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-4 border-2 border-gray-200 text-base font-extrabold rounded-xl text-[#121118] bg-white active:bg-gray-50 transition-all"
              >
                Sign up
              </Link>
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-4 border-2 border-transparent text-base font-extrabold rounded-xl text-white bg-[#05C067] active:bg-[#04a055] transition-all shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
