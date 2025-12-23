
import React, { useState, useMemo } from 'react';
import { 
  Home, Calendar as CalendarIcon, BarChart2, Repeat, GraduationCap, 
  Building2, Leaf, Award, PlayCircle, Info, Search, Bell, 
  Menu, X, MessageCircle, Mic, ChevronRight, TrendingUp,
  AlertCircle, CheckCircle2, LayoutDashboard
} from 'lucide-react';
import { Page } from './types';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import KPIModule from './components/KPIModule';
import QIProjects from './components/QIProjects';
import Academy from './components/Academy';
import Accreditations from './components/Accreditations';
import QualityAssistant from './components/QualityAssistant';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'kpis', label: 'KPIs', icon: BarChart2 },
    { id: 'qi-projects', label: 'QI Projects', icon: Repeat },
    { id: 'academy', label: 'Academy', icon: GraduationCap },
    { id: 'departments', label: 'Departments', icon: Building2 },
    { id: 'initiatives', label: 'Initiatives', icon: Leaf },
    { id: 'accreditations', label: 'Accreditations', icon: Award },
    { id: 'media', label: 'Media', icon: PlayCircle },
    { id: 'about', label: 'About Qnet', icon: Info },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'calendar': return <Calendar />;
      case 'kpis': return <KPIModule />;
      case 'qi-projects': return <QIProjects />;
      case 'academy': return <Academy />;
      case 'accreditations': return <Accreditations />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-slate-500">
          <AlertCircle size={48} className="mb-4 opacity-20" />
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <p>The {currentPage} module is currently under development.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 transition-all duration-300 flex flex-col z-50`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <LayoutDashboard className="text-white" size={24} />
          </div>
          {isSidebarOpen && <h1 className="text-white font-bold text-xl tracking-tight">Qnet</h1>}
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                currentPage === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search resources, projects, KPIs..." 
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-blue-600">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-medium text-slate-900">Dr. Abdulilah</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Quality Executive</p>
              </div>
              <img src="https://picsum.photos/seed/dr/40/40" className="w-10 h-10 rounded-full border border-slate-200" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderContent()}
          </div>
        </div>

        {/* Floating AI Assistant Trigger */}
        <button 
          onClick={() => setIsAssistantOpen(true)}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:bg-blue-700 transition-transform hover:scale-110 group z-50"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-12 right-0 bg-slate-900 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Ask Qnet AI
          </span>
        </button>

        {/* AI Assistant Sidebar/Modal */}
        {isAssistantOpen && (
          <QualityAssistant onClose={() => setIsAssistantOpen(false)} />
        )}
      </main>
    </div>
  );
};

export default App;
