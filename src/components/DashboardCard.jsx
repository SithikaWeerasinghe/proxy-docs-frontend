export default function DashboardCard({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${className}`}>
      {title && (
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
