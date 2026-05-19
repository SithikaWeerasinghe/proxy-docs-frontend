export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#FFD900] py-2.5 px-4 text-center border-b border-[#E5C300] relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-sm font-bold text-[#121118]">
          NEW IPv6 Proxies 1Gbps <span className="mx-2 font-normal opacity-50">|</span> NEW Static ISP Proxies [ 23 countries ]
        </p>
        <button className="px-3 py-1 bg-[#121118] text-white text-xs font-bold rounded hover:bg-[#2A2932] transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
}
