import { Briefcase, GraduationCap } from 'lucide-react';

export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Icon */}
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:-translate-x-1/2 z-10">
              {item.type === 'work' ? (
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              ) : (
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              )}
            </div>

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}
            >
              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-primary mb-3">{item.organization}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
