
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Plus } from 'lucide-react';

const Calendar: React.FC = () => {
  const [view, setView] = useState<'Month' | 'Week' | 'Year'>('Month');
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarDays = Array.from({ length: 35 }, (_, i) => i + 1);

  const events = [
    { day: 12, title: 'JCI Pre-Audit', type: 'Audit', color: 'bg-rose-100 text-rose-700 border-rose-200' },
    { day: 15, title: 'KPI Training', type: 'Workshop', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { day: 22, title: 'Safety Week', type: 'Campaign', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl flex flex-col h-[700px] overflow-hidden">
      {/* Calendar Toolbar */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-bold text-slate-900">Annual Calendar</h2>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            {['Year', 'Month', 'Week'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  view === v ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
              <ChevronLeft size={20} />
            </button>
            <span className="font-bold text-slate-900">October 2024</span>
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="h-6 w-[1px] bg-slate-200 hidden md:block" />
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-200 transition-colors">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-sm hover:bg-blue-700 transition-colors">
            <Plus size={16} /> Add Event
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-7">
        {days.map((day) => (
          <div key={day} className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center border-b border-r border-slate-100">
            {day}
          </div>
        ))}
        {calendarDays.map((date) => {
          const currentEvents = events.filter(e => e.day === date);
          return (
            <div key={date} className="min-h-[100px] p-2 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors group">
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-medium ${date > 31 ? 'text-slate-300' : 'text-slate-600'}`}>
                  {date > 31 ? date - 31 : date}
                </span>
              </div>
              <div className="space-y-1">
                {currentEvents.map((event, i) => (
                  <div 
                    key={i} 
                    className={`text-[10px] px-2 py-1 rounded-md border truncate cursor-pointer font-bold ${event.color}`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
