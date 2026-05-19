import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[#000000]/20 border-b border-[var(--color-brand-border)] text-xs text-[var(--color-brand-text-muted)]">
        <span className="uppercase font-mono tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="text-[var(--color-brand-text-muted)] hover:text-white transition-colors flex items-center gap-1"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm">
        <pre className="font-mono text-[var(--color-brand-text)]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
