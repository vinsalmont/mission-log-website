import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
  imageUrl,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center py-24`}>
      <div className="flex-1 space-y-6">
        <div className="bg-[#2A3C65] p-4 rounded-xl inline-block mb-6">
          <Icon className="w-8 h-8 text-[#5B6FC5]" />
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-xl text-gray-300">{description}</p>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-[#5B6FC5]">⚡</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <div className="bg-gradient-to-br from-[#5B6FC5] to-[#4A5DA8] p-1 rounded-2xl hover:shadow-xl hover:shadow-[#5B6FC5]/20 transition-all animate-pulse-slow">
          <img 
            src={imageUrl} 
            alt={title}
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;