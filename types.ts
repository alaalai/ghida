
export type Page = 'home' | 'calendar' | 'kpis' | 'qi-projects' | 'academy' | 'departments' | 'initiatives' | 'accreditations' | 'media' | 'about';

export interface KPI {
  id: string;
  name: string;
  category: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  history: { month: string; value: number }[];
}

export interface QIProject {
  id: string;
  title: string;
  department: string;
  status: 'Active' | 'Completed' | 'Planning';
  lead: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'Workshop' | 'Audit' | 'Campaign';
  location: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
}
