import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-[#FAFAFA] min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#121118] tracking-tight mb-6">
          Residential Proxy Plans Starting at $2.5/GB.
        </h1>
        <p className="text-xl text-[#525252] mb-10 max-w-2xl mx-auto">
          Scale your scraping operations effortlessly with flexible pay-as-you-go pricing or high-volume enterprise plans.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-10 py-5 bg-[#05C067] text-white font-extrabold rounded-xl hover:bg-[#04a055] transition-all shadow-[0_4px_14px_rgba(5,192,103,0.3)]">
            Start Free Trial
          </button>
          <Link to="/contact" className="px-10 py-5 bg-white border-2 border-gray-200 text-[#121118] font-extrabold rounded-xl hover:bg-gray-50 transition-all">
            Contact Sales
          </Link>
        </div>
        <p className="mt-8 text-sm text-[#A8A8A8] italic">
          // TODO: Replace static pricing with backend pricing API later.
        </p>
      </div>
    </div>
  );
}
