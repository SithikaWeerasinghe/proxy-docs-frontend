import { Link } from 'react-router-dom';

export default function FreeTrialCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-[#05C067] to-[#50EA48] py-20 px-10 md:px-20 text-center shadow-2xl isolate">
          
          {/* Decorative white transparent circles */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 border-[40px] border-white/10 rounded-full -z-10"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 border-[60px] border-white/10 rounded-full -z-10"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Start With a Free Trial
          </h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Start with a residential proxy free trial and test the full network before committing to a plan. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#05C067] font-extrabold rounded-xl hover:bg-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1">
              Get Started Free
            </button>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/40 text-white font-extrabold rounded-xl hover:bg-white/10 hover:border-white transition-transform hover:-translate-y-1">
              Talk to Sales
            </Link>
          </div>
          
          <p className="text-white/80 font-bold mb-12">
            Free trial &middot; No credit card
          </p>

          <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">
            🐱 A portion of every plan supports cat shelter donations monthly. 🐾
          </div>
          
        </div>
      </div>
    </section>
  );
}
