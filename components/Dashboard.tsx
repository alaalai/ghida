
import React from 'react';
/* Added missing Bell and CheckCircle2 imports from lucide-react */
import { TrendingUp, Award, Repeat, Lightbulb, Calendar as CalendarIcon, BarChart2, GraduationCap, PlayCircle, BookOpen, AlertCircle, Bell, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface DashboardProps {
  setCurrentPage: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  const highlights = [
    { title: "Latest Achievement", value: "94.2% Patient Satisfaction", icon: Award, color: "text-amber-600", bg: "bg-amber-100" },
    { title: "Current Status", value: "JCI Accredited", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Active QI Projects", value: "12 Ongoing", icon: Repeat, color: "text-blue-600", bg: "bg-blue-100" },
  ];

  const quickTiles = [
    { id: 'calendar', label: 'Annual Calendar', icon: CalendarIcon, desc: 'View upcoming audits and workshops' },
    { id: 'kpis', label: 'KPI Dashboard', icon: BarChart2, desc: 'Real-time quality performance metrics' },
    { id: 'qi-projects', label: 'Active QI Projects', icon: Repeat, desc: 'Track improvement initiatives' },
    { id: 'academy', label: 'Register for Workshop', icon: GraduationCap, desc: 'Continuous learning opportunities' },
    { id: 'media', label: 'Watch Latest Recording', icon: PlayCircle, desc: 'Training materials and webinars' },
    { id: 'magazine', label: 'Quality Magazine', icon: BookOpen, desc: 'Latest issues and highlights' },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back, Dr. Abdulilah</h1>
        <p className="text-slate-500">The Qnet Platform represents Quality as an integrated system.</p>
      </section>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className={`${item.bg} p-4 rounded-xl`}>
              <item.icon className={item.color} size={28} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{item.title}</p>
              <p className="text-xl font-bold text-slate-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Access Tiles */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600" />
              Quick Access Tiles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {quickTiles.map((tile) => (
                <button
                  key={tile.id}
                  onClick={() => setCurrentPage(tile.id as Page)}
                  className="bg-white p-5 rounded-2xl border border-slate-100 text-left hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <tile.icon size={24} className="text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" />
                  <h3 className="font-semibold text-slate-900 mb-1">{tile.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tile.desc}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Featured QI Project */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="relative z-10 max-w-lg">
                <span className="bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-1 rounded mb-4 inline-block">Featured QI Project</span>
                <h2 className="text-2xl font-bold mb-3">Post-Operative Infection Reduction</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">Reducing SSI by 15% through standardized sterilization protocols and real-time monitoring of clinical compliance across surgical units.</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">View Project Details</button>
             </div>
             <div className="absolute right-0 bottom-0 opacity-10">
               <Repeat size={240} strokeWidth={0.5} />
             </div>
          </section>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          {/* Announcements Bar */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Bell size={20} className="text-blue-600" />
              Announcements
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 shadow-sm">
              {[
                { title: "Upcoming JCI Survey", meta: "Starts in 12 days", status: "Priority" },
                { title: "New KPI Dashboard Update", meta: "Patient Experience module added", status: "Update" },
                { title: "Quality Workshop reminder", meta: "Tomorrow at 10:00 AM", status: "Alert" }
              ].map((ann, i) => (
                <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-slate-900">{ann.title}</h4>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">{ann.status}</span>
                  </div>
                  <p className="text-xs text-slate-500">{ann.meta}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Tip of the Week */}
          <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-500 text-white p-2 rounded-lg">
                <Lightbulb size={20} />
              </div>
              <h3 className="font-bold text-emerald-900">Quality Tip</h3>
            </div>
            <p className="text-sm text-emerald-800 leading-relaxed italic">
              "Continuous improvement is not about being perfect, it's about being better than you were yesterday. Focus on the data, not the blame."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
