export default function Contact() {
  return (
    <div className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-[#E8FBF1] text-[#05C067] font-black text-xs uppercase tracking-widest mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-6">
            We&apos;re here to help
          </h1>
          <p className="text-lg text-[#525252] max-w-2xl mx-auto">
            Our technical support team is available 24/7 to assist with integration, proxy configuration, and custom enterprise plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#121118] mb-2">Email Support</h3>
              <p className="text-[#525252] mb-4">For general inquiries and technical support.</p>
              <a href="mailto:support@catproxies.com" className="text-lg font-bold text-[#05C067] hover:underline">support@catproxies.com</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#121118] mb-2">Live Chat</h3>
              <p className="text-[#525252] mb-4">Chat directly with our support team.</p>
              <button className="text-lg font-bold text-[#246BFD] hover:underline">Open Live Chat</button>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-extrabold text-[#121118] mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#121118] mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05C067]/20 focus:border-[#05C067] transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#121118] mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05C067]/20 focus:border-[#05C067] transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#121118] mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05C067]/20 focus:border-[#05C067] transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#121118] mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05C067]/20 focus:border-[#05C067] transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-[#05C067] text-white font-extrabold rounded-xl hover:bg-[#04a055] transition-all shadow-[0_4px_14px_rgba(5,192,103,0.3)]">
                Send Message
              </button>
              <p className="text-xs text-center text-[#A8A8A8] mt-4">
                // TODO: Connect contact form submission to backend later.
              </p>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
