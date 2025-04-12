
import React from 'react';
import { Activity, BookOpen, Stethoscope, Lightbulb, Plus } from 'lucide-react';

const ToolsSection: React.FC = () => {
  const tools = [
    {
      id: 'symptom-checker',
      icon: <Activity className="h-6 w-6 text-white" />,
      label: 'Symptom Checker',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'learn-about',
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      label: 'Learn about',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'treatment',
      icon: <Stethoscope className="h-6 w-6 text-black" />,
      label: 'Treatment',
      bgColor: 'bg-[#FFF5EB]'
    },
    {
      id: 'medical-tips',
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      label: 'Medical tips',
      bgColor: 'bg-green-500'
    },
    {
      id: 'see-more',
      icon: <Plus className="h-6 w-6 text-gray-600" />,
      label: 'See More',
      bgColor: 'bg-gray-100'
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-4">
        {tools.map((tool) => (
          <div key={tool.id} className="flex flex-col items-center">
            <div className={`h-14 w-14 ${tool.bgColor} rounded-full flex items-center justify-center mb-2`}>
              {tool.icon}
            </div>
            <span className="text-sm text-gray-700">{tool.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
