export default function PageHeader({ title, description }) {
  return (
    <div className="bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-border)] pt-24 pb-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-[var(--color-brand-text-muted)] max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
