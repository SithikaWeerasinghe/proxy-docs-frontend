export default function StatsStrip() {
  const stats = [
    { value: '20M+', label: 'Residential IPs' },
    { value: '195', label: 'Countries covered' },
    { value: '99.9%', label: 'Uptime guarantee' },
    { value: '5,000+', label: 'Happy clients' },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-gray-100 gap-y-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#05C067] to-[#50EA48] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-bold text-[#525252] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
