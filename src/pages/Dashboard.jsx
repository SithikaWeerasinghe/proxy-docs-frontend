import { Link } from 'react-router-dom';
import { DollarSign, Layers, Activity, Server, ArrowRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import DashboardCard from '../components/DashboardCard';
import StatusBadge from '../components/StatusBadge';
import UsageChart from '../components/UsageChart';
import ActivityItem from '../components/ActivityItem';

// Mock Data
const usageData = [
  { label: 'Jan', value: '120GB' },
  { label: 'Feb', value: '145GB' },
  { label: 'Mar', value: '160GB' },
  { label: 'Apr', value: '210GB' },
  { label: 'May', value: '248GB' },
];

const activeOrders = [
  { id: 'ORD-1001', product: 'Residential Proxy', location: 'United States', status: 'Active', bandwidth: '45 GB', expiry: '2025-07-10' },
  { id: 'ORD-1002', product: 'ISP Proxy', location: 'United Kingdom', status: 'Active', bandwidth: '32 GB', expiry: '2025-07-18' },
  { id: 'ORD-1003', product: 'Datacenter Proxy', location: 'Germany', status: 'Pending', bandwidth: '18 GB', expiry: '2025-07-22' },
  { id: 'ORD-1004', product: 'Mobile Proxy', location: 'Canada', status: 'Active', bandwidth: '60 GB', expiry: '2025-08-01' },
];

const proxyProducts = [
  { name: 'Residential Proxies', desc: '20M+ IP pool', price: 'From $2.50/GB', status: 'Available' },
  { name: 'ISP Proxies', desc: 'Static residential IPs', price: 'From $2/month', status: 'Available' },
  { name: 'Datacenter Proxies', desc: 'High-speed server IPs', price: 'From $4.50/day', status: 'Available' },
  { name: 'Mobile Proxies', desc: '3G, 4G, and 5G IPs', price: 'From $4.50/GB', status: 'Available' },
];

const recentActivity = [
  { title: 'API key created', time: '2 minutes ago' },
  { title: 'New residential proxy order placed', time: '1 hour ago' },
  { title: 'Bandwidth usage updated', time: '3 hours ago' },
  { title: 'Invoice generated', time: 'Yesterday' },
  { title: 'Login from new device', time: '2 days ago' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">

      {/* 1. Top dashboard hero/header */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
            <p className="text-slate-500 max-w-2xl text-lg">
              Manage your proxy services, monitor usage, review active orders, and access your API tools.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/api-keys"
              className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Manage API Keys
            </Link>
            <button
              className="px-5 py-2.5 bg-[#05C067] text-white font-medium rounded-xl hover:bg-[#04a055] transition-colors shadow-sm"
            >
              Create Order
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* 2. Main stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Account Balance"
            value="$125.40"
            subtitle="Available balance"
            icon={DollarSign}
          />
          <StatCard
            title="Active Orders"
            value="8"
            subtitle="Running proxy plans"
            icon={Layers}
            colorClass="text-[#246BFD]"
            bgClass="bg-[#246BFD]/10"
          />
          <StatCard
            title="Bandwidth Used"
            value="248 GB"
            subtitle="This month"
            icon={Activity}
          />
          <StatCard
            title="API Requests"
            value="12,480"
            subtitle="Last 30 days"
            icon={Server}
            colorClass="text-[#246BFD]"
            bgClass="bg-[#246BFD]/10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">

            {/* 3. Usage Overview section */}
            <DashboardCard title="Usage Overview">
              <UsageChart data={usageData} />
            </DashboardCard>

            {/* 4. Active Orders table */}
            <DashboardCard title="Active Orders" className="overflow-hidden">
              <div className="overflow-x-auto -mx-6 px-6 pb-2">
                <table className="w-full text-left whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bandwidth</th>
                      <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Expiry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 text-sm font-medium text-slate-900">{order.id}</td>
                        <td className="py-4 text-sm text-slate-600">{order.product}</td>
                        <td className="py-4 text-sm text-slate-600">{order.location}</td>
                        <td className="py-4 text-sm"><StatusBadge status={order.status} /></td>
                        <td className="py-4 text-sm text-slate-600 font-medium">{order.bandwidth}</td>
                        <td className="py-4 text-sm text-slate-500">{order.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>

            {/* 5. Proxy products summary */}
            <DashboardCard title="Proxy Services">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proxyProducts.map((product) => (
                  <div key={product.name} className="border border-slate-100 rounded-xl p-5 hover:border-[#05C067]/50 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-900">{product.name}</h4>
                      <StatusBadge status={product.status} />
                    </div>
                    <p className="text-sm text-slate-500 mb-4">{product.desc}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-bold text-slate-800">{product.price}</span>
                      <button className="text-sm font-medium text-[#05C067] flex items-center gap-1 hover:text-[#04a055]">
                        View Details <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

          </div>

          {/* Right Column (Sidebar Content) */}
          <div className="space-y-8">

            {/* 6. API Access card */}
            <DashboardCard title="API Access">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">API Status</span>
                  <StatusBadge status="Enabled" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Last Used</span>
                  <span className="text-sm font-medium text-slate-900">5 minutes ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Requests Today</span>
                  <span className="text-sm font-medium text-slate-900">1,246</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Active API Keys</span>
                  <span className="text-sm font-medium text-slate-900">2</span>
                </div>
              </div>
              <Link
                to="/api-keys"
                className="w-full block text-center px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors"
              >
                Manage API Keys
              </Link>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 italic">
                * Backend developers can replace this mock API status with real API key data later.
              </div>
            </DashboardCard>

            {/* 7. Billing Summary card */}
            <DashboardCard title="Billing Summary">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Current Balance</span>
                  <span className="text-base font-bold text-slate-900">$125.40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Last Invoice</span>
                  <span className="text-sm font-medium text-slate-900">$49.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Next Renewal</span>
                  <span className="text-sm font-medium text-slate-900">2025-07-30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Payment Method</span>
                  <span className="text-sm font-medium text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-5 bg-blue-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
                    ending 4242
                  </span>
                </div>
              </div>
              <button
                className="w-full px-4 py-2.5 bg-white border border-[#246BFD] text-[#246BFD] font-medium rounded-xl hover:bg-[#246BFD] hover:text-white transition-colors"
              >
                View Billing
              </button>
            </DashboardCard>

            {/* 8. Recent Activity */}
            <DashboardCard title="Recent Activity">
              <div className="mt-2">
                {recentActivity.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    title={activity.title}
                    time={activity.time}
                    isLast={index === recentActivity.length - 1}
                  />
                ))}
              </div>
            </DashboardCard>

          </div>
        </div>

        {/* 9. Bottom CTA section */}
        <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-[#05C067] to-[#04a055] p-10 md:p-14 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need more proxy resources?
          </h2>
          <p className="text-green-50 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Upgrade your plan, create a new order, or contact support for a custom package.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-[#05C067] font-semibold rounded-xl hover:bg-slate-50 shadow-sm transition-transform hover:-translate-y-0.5">
              Create Order
            </button>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-transform hover:-translate-y-0.5">
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
