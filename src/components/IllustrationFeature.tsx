import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IllustrationFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  illustration: string;
  reverse?: boolean;
}

const IllustrationFeature: React.FC<IllustrationFeatureProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
  illustration,
  reverse = false
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center py-24`}
    >
      <div className="flex-1 space-y-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-space-purple p-4 rounded-xl inline-block mb-6 shadow-lg shadow-space-violet/20"
        >
          <Icon className="w-8 h-8 text-space-violet" />
        </motion.div>
        <h3 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-white via-space-violet to-space-yellow bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-xl text-gray-300">{description}</p>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="text-space-violet">✦</span>
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div 
        className="flex-1"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-space-violet to-space-purple opacity-20 blur-2xl"></div>
          <img 
            src={illustration} 
            alt={title}
            className="relative z-10 w-full h-auto rounded-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default IllustrationFeature;