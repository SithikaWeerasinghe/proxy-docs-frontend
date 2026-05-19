export const proxyProducts = [
  { 
    id: 'residential',
    name: 'Residential Proxies', 
    tag: 'FROM $2.5/GB', 
    badge: 'MOST POPULAR',
    price: '$2.5/GB', 
    accent: 'green',
    description: 'Real ISP-assigned IPs from a pool of 20M+ residential addresses. Supports rotating and sticky sessions with country, state, and city-level targeting across 195 countries. HTTP and SOCKS5 protocols included.',
    features: ['20M+ IP pool', '195 countries', 'Rotating and sticky sessions', 'HTTP and SOCKS5']
  },
  { 
    id: 'unlimited',
    name: 'Unlimited Residential', 
    tag: 'UNLIMITED BANDWIDTH', 
    price: 'Flat rate/plan', 
    accent: 'green',
    description: 'Unlimited bandwidth on a 1M+ residential peer network. Best for sustained workloads where bandwidth costs would dominate a per-GB plan.',
    features: ['Unmetered bandwidth', '1M+ residential IPs', 'HTTP SOCKS5 UDP', '195 countries']
  },
  { 
    id: 'datacenter',
    name: 'Datacenter Proxies', 
    tag: 'FROM $4.5/DAY', 
    price: '$4.5/day', 
    accent: 'blue',
    description: 'High-speed server-hosted proxies optimized for performance-critical automation and high-volume scraping on low-risk targets.',
    features: ['Ultra-fast response times', 'High-volume bandwidth', 'US and EU locations', 'Dedicated IPs available']
  },
  { 
    id: 'mobile',
    name: 'Mobile Proxies', 
    tag: 'FROM $4.5/GB', 
    price: '$4.5/GB', 
    accent: 'red',
    description: '3G, 4G, and 5G IPs from real mobile carriers. Designed for applications that require high IP reputation and rotating mobile sessions on carrier-grade networks.',
    features: ['Real carrier IPs', 'Automatic IP rotation', '4G and 5G networks', 'Sticky sessions available']
  },
  { 
    id: 'ipv6',
    name: 'IPv6 Proxies', 
    tag: 'FROM $8/DAY', 
    price: '$8/day', 
    accent: 'purple',
    description: 'Scalable IPv6 proxy infrastructure for modern applications that support IPv6 and require cost-efficient IP diversity at high volumes.',
    features: ['Large IPv6 pool', 'Low cost per IP', 'Native IPv6 support', 'High-volume deployment']
  },
  { 
    id: 'isp',
    name: 'ISP Proxies', 
    tag: 'STATIC RESIDENTIAL IPS', 
    price: '$2/month', 
    accent: 'orange',
    description: 'Static residential IPs hosted on datacenter infrastructure. Combines residential trust with datacenter speed for account management workflows.',
    features: ['Clean static IPs', '1–3 month sessions', '23 countries', 'Unlimited bandwidth']
  },
];
