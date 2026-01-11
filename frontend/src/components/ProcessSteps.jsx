import React from 'react';
import { UserPlus, Search, TrendingUp, ChevronRight } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Załóż konto.',
      icon: UserPlus,
    },
    {
      number: 2,
      title: 'Wyszukaj kort.',
      icon: Search,
    },
    {
      number: 3,
      title: 'Wejdź do gry!',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center mb-4 border-4 border-[#A4C639] group-hover:border-[#8FB82E] transition-colors">
                  <step.icon className="text-[#2C3E50]" size={40} />
                </div>
                <h3 className="text-[#2C3E50] text-lg font-semibold">
                  {step.number}.{step.title}
                </h3>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight
                  className="hidden md:block text-gray-400 mt-[-40px]"
                  size={48}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
