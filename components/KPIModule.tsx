
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area 
} from 'recharts';
import { Filter, Download, Info, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const data = [
  { month: 'Jan', performance: 88, target: 90 },
  { month: 'Feb', performance: 92, target: 90 },
  { month: 'Mar', performance: 91, target: 90 },
  { month: 'Apr', performance: 85, target: 90 },
  { month: 'May', performance: 94, target: 90 },
  { month: 'Jun', performance: 96, target: 90 },
];

const KPIModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Safety');

  const categories = ['Safety', 'Clinical', 'Experience', 'Compliance', 'Risk'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">KPI Dashboards</h1>
          <p className="text-sm text-slate-500">Real-time monitoring of quality metrics across the institution.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            <Download size={16} /> Export Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === cat ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Patient Safety Index', value: '94.2%', trend: '+2.1%', status: 'up' },
          { label: 'Average Wait Time', value: '18 min', trend: '-5.0%', status: 'down' },
          { label: 'Clinical Excellence', value: '88.0%', trend: 'Stable', status: 'stable' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
              <Info size={16} className="text-slate-300" />
            </div>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${
                stat.status === 'up' ? 'text-emerald-600 bg-emerald-50' : 
                stat.status === 'down' ? 'text-rose-600 bg-rose-50' : 'text-slate-600 bg-slate-50'
              }`}>
                {stat.status === 'up' && <ArrowUpRight size={12} />}
                {stat.status === 'down' && <ArrowDownRight size={12} />}
                {stat.status === 'stable' && <Minus size={12} />}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Performance Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[80, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="performance" stroke="#2563eb" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={3} />
                <Line type="monotone" dataKey="target" stroke="#cbd5e1" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Departmental Breakdown</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'ER', score: 92 },
                { name: 'ICU', score: 88 },
                { name: 'OR', score: 95 },
                { name: 'Med-Surg', score: 84 },
                { name: 'Outpatient', score: 91 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIModule;
