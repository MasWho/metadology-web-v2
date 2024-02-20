import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export type BasePopupProps = {
  onClose: () => void;
};

const PopupCloseButton = (props: BasePopupProps) => {
  const { onClose } = props;
  return (
    <button onClick={onClose} className="mt-[1rem] mr-[1rem]">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#333336" />
        <path
          d="M23 13C19.0948 16.9052 13 23 13 23"
          stroke="#D6D6D7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M23 23C19.0948 19.0948 13 13 13 13"
          stroke="#D6D6D7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

const PopupLayout = (props: PropsWithChildren<BasePopupProps>) => {
  const { children, onClose } = props;

  useLayoutEffect(() => {
    const app = document.getElementById('app-main');
    if (app) {
      app.style.overflow = 'hidden';
    }
    return () => {
      if (app) {
        app.style.overflowY = 'auto';
        app.style.overflowX = 'hidden';
      }
    };
  }, []);

  const component = (
    <motion.aside
      className="fixed top-0 left-0 h-[100vh] w-[100vw] overflow-auto z-[1000] backdrop-blur-xl py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      id="popup"
    >
      <motion.div 
        className="w-[90vw] tablet:w-[80vw] max-w-[1000px] bg-c-primary rounded-2xl mx-auto"
        initial={{ y: 3000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex justify-end h-0 sticky top-[-3rem]">
          <PopupCloseButton onClose={onClose} />
        </div>
        <div className='pt-[5rem] pb-[2rem] px-[2rem]'>
          {children}
        </div>
      </motion.div>
    </motion.aside>
  );
  return createPortal(component, document.body);
};

export default PopupLayout;
