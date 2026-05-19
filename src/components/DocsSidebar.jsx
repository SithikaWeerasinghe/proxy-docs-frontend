export default function DocsSidebar({ activeSection }) {
  const groups = [
    {
      title: 'Introduction',
      links: [
        { id: 'overview', label: 'Overview' },
        { id: 'authentication', label: 'Authentication' },
        { id: 'base-url', label: 'Base URL' },
        { id: 'rate-limits', label: 'Rate Limits' },
      ],
    },
    {
      title: 'Endpoints',
      links: [
        { id: 'account', label: 'Account' },
        { id: 'products', label: 'Store & Products' },
        { id: 'orders', label: 'Orders' },
        { id: 'targeting', label: 'Targeting' },
      ],
    },
    {
      title: 'Support',
      links: [
        { id: 'error-handling', label: 'Error Handling' },
        { id: 'backend-notes', label: 'Backend Notes' },
      ],
    },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-semibold text-white mb-3 px-3 uppercase tracking-wider text-xs">
            {group.title}
          </h3>
          <ul className="space-y-1 text-sm">
            {group.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className={`block px-3 py-2 rounded-md transition-all border-l-2 ${
                      isActive
                        ? 'bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] font-medium border-[var(--color-brand-blue)]'
                        : 'text-[var(--color-brand-text-muted)] hover:text-white hover:bg-[var(--color-brand-bg)] border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
