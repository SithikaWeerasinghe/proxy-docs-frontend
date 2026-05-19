export default function UsageChart({ data }) {
  // Simple CSS-only bar chart
  const maxVal = Math.max(...data.map(d => parseInt(d.value)));

  return (
    <div className="w-full pt-6">
      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, index) => {
          const heightPercent = `${(parseInt(item.value) / maxVal) * 100}%`;
          // Highlight the last bar
          const isLast = index === data.length - 1;

          return (
            <div key={item.label} className="flex flex-col items-center flex-1 group">
              <div className="w-full flex justify-center relative h-full items-end">
                {/* Tooltip on hover */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">
                  {item.value}
                </div>
                <div
                  className={`w-full max-w-[40px] sm:max-w-[60px] rounded-t-sm transition-all duration-500 ease-out group-hover:opacity-80 ${isLast ? 'bg-[#05C067]' : 'bg-[#05C067]/30'}`}
                  style={{ height: heightPercent }}
                ></div>
              </div>
              <span className="text-xs text-slate-500 mt-3 font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 italic">
        * Bandwidth usage is shown using mock frontend data and can be replaced with API data later.
      </div>
    </div>
  );
}
