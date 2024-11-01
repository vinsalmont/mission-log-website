import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title, image }) => {
  return (
    <div className="glass-card p-6 rounded-2xl relative">
      <Quote className="absolute text-space-violet/20 w-24 h-24 -top-4 -left-4" />
      <div className="relative z-10">
        <p className="text-lg mb-6 text-gray-200 leading-relaxed">{quote}</p>
        <div className="flex items-center gap-4">
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-white">{author}</h4>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;