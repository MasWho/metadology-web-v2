import React, { useEffect, useCallback } from 'react';
import { useAnimate } from 'framer-motion';
import { AllSections } from '@/pages';

type Props = {
  sectionName: AllSections;
  show: boolean;
  text?: string;
  onClick?: () => void;
};

const SectionButtonIcon = () => {
  return (
    <div className='w-[25px] h-[25px] tablet:w-[36px] tablet:h-[36px]'>
      <svg
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.680664" width="36" height="36" rx="18" fill="#77DA7B" />
        <g opacity="0.8">
          <path
            d="M26.1807 16.5H20.2807V10.6C20.2807 9.7 19.5807 9 18.6807 9C17.7807 9 17.1807 9.7 17.1807 10.5V16.4H11.2807C10.3807 16.4 9.68066 17.1 9.68066 18C9.68066 18.9 10.3807 19.5 11.1807 19.5H17.0807V25.4C17.0807 26.3 17.7807 26.9 18.5807 26.9C19.4807 26.9 20.0807 26.2 20.0807 25.4V19.5H25.9807C26.8807 19.5 27.4807 18.8 27.4807 18C27.6807 17.2 26.9807 16.5 26.1807 16.5Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

const SectionButton = (props: Props) => {
  const [scope, animate] = useAnimate();
  const { sectionName, show, text = 'More on this section', onClick } = props;

  const enterAnimation = useCallback(async () => {
    animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    await animate(scope.current, { scale: 1.2 }, { duration: 0.5 });
    await animate(scope.current, { scale: 1 }, { duration: 0.5 });
    animate(`#${sectionName}-section-icon`, { width: 'auto' }, { duration: 0.5 });
    animate(`#${sectionName}-section-text`, { width: 'auto' }, { duration: 0.5 });
    animate(`#${sectionName}-section-icon`, { left: 0 }, { duration: 0.3 });
    animate(`#${sectionName}-section-text`, { opacity: 1 }, { duration: 2 });
  }, [sectionName, scope, animate]);

  const exitAnimation = useCallback(async () => {
    animate(`#${sectionName}-section-icon`, { left: '-155%' }, { duration: 0.7 });
    animate(`#${sectionName}-section-text`, { opacity: 0 }, { duration: 0.1 });
    animate(`#${sectionName}-section-icon`, { width: 0 }, { duration: 0.5 });
    animate(`#${sectionName}-section-text`, { width: 0 }, { duration: 0.5 });
    await animate(scope.current, { opacity: 0 }, { duration: 1.5 });
  }, [sectionName, animate, scope]);

  useEffect(() => {
    if (show) {
      enterAnimation();
    } else {
      exitAnimation();
    }
  }, [show, enterAnimation, exitAnimation]);

  return (
    <div ref={scope} className="z-[100] sticky w-full flex justify-center bottom-10 mt-5 opacity-0">
      <button
        id={`${sectionName}-section-button`}
        className="whitespace-nowrap relative before:opacity-90 before:bg-c-section-heading before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:w-full before:h-full before:rounded-full before:z-10 flex items-center justify-between rounded-full gap-4 pl-3 pr-1 py-1 tablet:gap-6 tablet:pl-6 tablet:pr-2 tablet:py-2"
        onClick={onClick}
      >
        <span
          id={`${sectionName}-section-text`}
          className="w-0 opacity-0 font-normal z-20 text-c-heading overflow-hidden text-[14px] tablet:text-[18px]"
        >
          {text}
        </span>
        <span id={`${sectionName}-section-icon`} className="w-0 relative left-[-155%] z-20">
          <SectionButtonIcon />
        </span>
      </button>
    </div>
  );
};

export default SectionButton;
