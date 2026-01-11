import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, ChevronRight } from 'lucide-react';
import { news } from '../mockData';
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-8">Aktualności</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-300 border-l-4 border-[#A4C639] cursor-pointer group"
              onClick={() => navigate(`/aktualnosci/${item.id}`)}
            >
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  {new Date(item.date).toLocaleDateString('pl-PL')}
                </div>
                <CardTitle className="text-[#2C3E50] group-hover:text-[#A4C639] transition-colors flex items-center justify-between">
                  {item.title}
                  <ChevronRight className="text-[#A4C639]" size={20} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/aktualnosci')}
            className="text-[#A4C639] hover:text-[#8FB82E] font-semibold underline text-lg"
          >
            zobacz archiwum
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
