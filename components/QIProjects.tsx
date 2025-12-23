
import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, ExternalLink, Calendar, User, Tag } from 'lucide-react';

const QIProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { 
      id: 'PJ-001', 
      title: 'ER Wait Time Optimization', 
      department: 'Emergency Room', 
      status: 'Active', 
      lead: 'Dr. Sarah Wilson',
      progress: 65,
      impact: 'High'
    },
    { 
      id: 'PJ-002', 
      title: 'Hand Hygiene Compliance', 
      department: 'Infection Control', 
      status: 'Completed', 
      lead: 'John Miller',
      progress: 100,
      impact: 'Critical'
    },
    { 
      id: 'PJ-003', 
      title: 'Pharmacy Error Reduction', 
      department: 'Pharmacy', 
      status: 'Planning', 
      lead: 'Amirah Ahmed',
      progress: 15,
      impact: 'Medium'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">QI Projects Library</h1>
          <p className="text-sm text-slate-500">Track and manage continuous improvement initiatives across departments.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all">
          <Plus size={20} /> Submit New Project
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by ID, title, or department..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Active', 'Completed', 'Planning'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeFilter === f ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">{proj.id}</span>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Tag size={14} />
                <span>{proj.department}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <User size={14} />
                <span>{proj.lead}</span>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-tighter">
                  <span>Progress</span>
                  <span>{proj.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      proj.status === 'Completed' ? 'bg-emerald-500' : 
                      proj.status === 'Planning' ? 'bg-amber-400' : 'bg-blue-500'
                    }`} 
                    style={{ width: `${proj.progress}%` }} 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className={`text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 ${
                  proj.impact === 'Critical' ? 'bg-rose-50 text-rose-600' : 
                  proj.impact === 'High' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-600'
                }`}>
                  {proj.impact} Impact
                </div>
                <button className="text-blue-600 hover:underline text-xs font-bold flex items-center gap-1">
                  Profile <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QIProjects;
