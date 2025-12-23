
import React from 'react';
import { Award, ShieldCheck, Timer, AlertCircle, FileText, Globe } from 'lucide-react';

const Accreditations: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Accreditations & Compliance</h1>
          <p className="text-sm text-slate-500">Managing institutional standards and survey readiness.</p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 border border-emerald-100">
          <ShieldCheck size={18} /> Compliant Status
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-600 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-slate-900">JCI Accreditation</span>
                <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded uppercase font-bold">Active</span>
              </div>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">International healthcare standard for patient safety and quality of care.</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Valid until: 2026</span>
                <button className="text-blue-600 font-bold hover:underline">View Certificate</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-amber-500 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-slate-900">Upcoming survey</span>
                <Timer size={18} className="text-amber-500" />
              </div>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">Next CBAHI Mock Survey planned for next month. Preparation starts now.</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-600 font-bold">Days Left: 14</span>
                <button className="text-blue-600 font-bold hover:underline">Readiness Guide</button>
              </div>
            </div>
          </div>

          {/* Standards Corner */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Standards Corner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { title: "IPSG Guidelines", icon: AlertCircle, desc: "International Patient Safety Goals 2024" },
                 { title: "Medication Policy", icon: FileText, desc: "New update regarding high-alert medication" },
                 { title: "Infection Control", icon: ShieldCheck, desc: "Hand hygiene monitoring standards" },
                 { title: "Clinical Pathways", icon: Globe, desc: "Standardized care protocols updated" }
               ].map((std, i) => (
                 <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 hover:border-blue-500 transition-colors cursor-pointer group">
                   <div className="p-3 bg-slate-50 rounded-lg text-slate-400 group-hover:text-blue-600 transition-colors">
                     <std.icon size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm">{std.title}</h4>
                     <p className="text-xs text-slate-500">{std.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
           <div className="bg-slate-900 text-white p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4">Latest Accr. News</h3>
              <div className="space-y-4">
                {[
                  "Successful Internal Audit for Radiology Dept.",
                  "New Patient Safety Standards published by MOH",
                  "Excellence Award for Pediatric Unit Performance"
                ].map((news, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <p className="text-xs text-slate-300 leading-relaxed hover:text-white transition-colors cursor-pointer">{news}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all">View All News</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
