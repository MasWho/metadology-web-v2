import React from 'react';
import { AllSections } from '@/pages';
import { motion } from 'framer-motion';

const ReadMoreButtonIcon = () => {
  return (
    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.680664" width="36" height="36" rx="18" fill="#77DA7B" />
      <g opacity="0.8">
        <path
          d="M26.1807 16.5H20.2807V10.6C20.2807 9.7 19.5807 9 18.6807 9C17.7807 9 17.1807 9.7 17.1807 10.5V16.4H11.2807C10.3807 16.4 9.68066 17.1 9.68066 18C9.68066 18.9 10.3807 19.5 11.1807 19.5H17.0807V25.4C17.0807 26.3 17.7807 26.9 18.5807 26.9C19.4807 26.9 20.0807 26.2 20.0807 25.4V19.5H25.9807C26.8807 19.5 27.4807 18.8 27.4807 18C27.6807 17.2 26.9807 16.5 26.1807 16.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

const ReadMoreButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="w-[180px] bg-[#e8e8eda4] flex items-center justify-center gap-6 rounded-full pl-6 pr-2 py-2"
    >
      <span className="text-c-primary italic">Read More</span>
      <span className="relative">
        <ReadMoreButtonIcon />
      </span>
    </motion.button>
  );
};

export default ReadMoreButton;
