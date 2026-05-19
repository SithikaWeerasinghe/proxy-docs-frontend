export default function ActivityItem({ title, time, isLast }) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-[-16px] w-[2px] bg-slate-100"></div>
      )}
      
      {/* Timeline dot */}
      <div className="relative mt-1.5 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[#05C067]/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#05C067]"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pb-6">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{time}</p>
      </div>
    </div>
  );
}
