import CodeBlock from './CodeBlock';

const methodColors = {
  GET: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  POST: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  PUT: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  DELETE: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  PATCH: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function EndpointCard({ method, path, description, requestCode, responseCode }) {
  const badgeClass = methodColors[method] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';

  return (
    <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] overflow-hidden mb-8 hover:border-[var(--color-brand-blue)]/50 transition-colors">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider border ${badgeClass}`}>
            {method}
          </span>
          <code className="text-white font-mono font-semibold bg-[var(--color-brand-bg)] px-2.5 py-1 rounded border border-[var(--color-brand-border)]">
            {path}
          </code>
        </div>
        <p className="text-[var(--color-brand-text)] mb-6">{description}</p>
        
        <div className="space-y-6">
          {requestCode && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Sample Request</h4>
              <CodeBlock code={requestCode} language="bash" />
            </div>
          )}
          
          {responseCode && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Sample Response</h4>
              <CodeBlock code={responseCode} language="json" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
