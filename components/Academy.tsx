
import React from 'react';
import { Search, PlayCircle, Clock, Award, Filter, ArrowRight } from 'lucide-react';

const Academy: React.FC = () => {
  const categories = ['Intro to Quality', 'KPI Management', 'Patient Safety', 'Improvement Tools'];
  
  const courses = [
    { title: 'Fundamentals of Lean Six Sigma', dur: '4h 30m', category: 'Improvement Tools', img: 'https://picsum.photos/seed/lean/400/250' },
    { title: 'Patient Safety & Risk Mgmt', dur: '2h 15m', category: 'Patient Safety', img: 'https://picsum.photos/seed/safety/400/250' },
    { title: 'Advanced KPI Visualizations', dur: '1h 45m', category: 'KPI Management', img: 'https://picsum.photos/seed/kpi/400/250' },
    { title: 'Root Cause Analysis Toolkit', dur: '3h 00m', category: 'Improvement Tools', img: 'https://picsum.photos/seed/rca/400/250' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden">
        <div className="max-w-xl relative z-10">
          <h1 className="text-4xl font-bold mb-4">Master Excellence in Healthcare</h1>
          <p className="text-slate-400 text-lg mb-8">Access our library of expert-led workshops, toolkits, and microlearning videos designed for continuous clinical improvement.</p>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all">Start Learning</button>
            <button className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
              <PlayCircle size={20} /> View Catalog
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent flex items-center justify-center opacity-30 md:opacity-100">
          <GraduationCap size={240} className="text-blue-500" />
        </div>
      </div>

      {/* Course Listing */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Recommended for You</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><Filter size={18} /></button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><Search size={18} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
              <div className="relative h-40 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase text-blue-600">
                  {course.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 mb-3 line-clamp-2">{course.title}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {course.dur}</span>
                    <span className="flex items-center gap-1"><Award size={12} /> Certificate</span>
                  </div>
                  <button className="text-blue-600 p-2 hover:bg-blue-50 rounded-full transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GraduationCap: React.FC<any> = ({ className, size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;

export default Academy;
