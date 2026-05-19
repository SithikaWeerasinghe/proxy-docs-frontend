export default function StatusBadge({ status }) {
  let bgClass = 'bg-slate-100';
  let textClass = 'text-slate-700';

  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus === 'active' || normalizedStatus === 'available' || normalizedStatus === 'enabled') {
    bgClass = 'bg-[#05C067]/10';
    textClass = 'text-[#05C067]';
  } else if (normalizedStatus === 'pending') {
    bgClass = 'bg-amber-100';
    textClass = 'text-amber-600';
  } else if (normalizedStatus === 'expired' || normalizedStatus === 'disabled') {
    bgClass = 'bg-red-100';
    textClass = 'text-red-600';
  }

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${bgClass} ${textClass}`}>
      {status}
    </span>
  );
}
