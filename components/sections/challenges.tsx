import React from 'react';
import SectionLayout from '../layout/section-layout';
import BubbleBackground from '../backgrounds/bubble-background';
import { motion } from 'framer-motion';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.02,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Challenges = () => {
  return (
    <SectionLayout sectionName={'challenges'} background={<BubbleBackground />}>
      <div className="py-14 z-[10] relative desktop:py-20">
        {/* Heading */}
        <motion.h1
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-[24px] mb-7 tablet:text-[30px] desktop:text-[36px] desktop:mb-16"
        >
          {'We get it, '.split('').map((char, index) => {
            return (
              <motion.span
                className="text-c-section-heading"
                key={char + '-' + index}
                variants={letter}
              >
                {char}
              </motion.span>
            );
          })}
          {'selling property was difficult'.split('').map((char, index) => {
            return (
              <motion.span className="text-c-heading" key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        {/* Bullet list */}
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-[14px] gap-2 tablet:flex-row tablet:gap-[50px] tablet:mx-auto tablet:justify-center desktop:text-[18px] desktop:gap-[100px]"
        >
          <ul className="text-c-heading list-disc list-inside flex flex-col gap-2 items-start min-w-[220px]">
            <li className="text-c-accent-green">
              <span className="text-c-heading">How to increase foot traffic</span>
            </li>
            <li className="text-c-accent-green">
              <span className="text-c-heading">Trouble visualizing finishes</span>
            </li>
            <li className="text-c-accent-green">
              <span className="text-c-heading">Sales, deposits & contracting</span>
            </li>
          </ul>
          <ul className="text-c-heading list-disc list-inside flex flex-col gap-2 items-start min-w-[220px]">
            <li className="text-c-accent-green">
              <span className="text-c-heading">Logistics around viewings</span>
            </li>
            <li className="text-c-accent-green">
              <span className="text-c-heading">Existing tenants and layouts</span>
            </li>
            <li className="text-c-accent-green">
              <span className="text-c-heading">Buyers unfamiliar with the area</span>
            </li>
          </ul>
        </motion.article>
        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-7 text-[16px] tablet:w-[80%] tablet:mx-auto tablet:text-[22px] desktop:mt-16 desktop:text-[28px] desktop:w-[85%]"
        >
          <span className="text-c-heading">We have solved the above </span>
          <span className="text-c-section-heading">
            and many other challenges in the residential, development and commercial property space
          </span>
        </motion.p>
        {/* Call to action */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
          className="text-c-heading text-center mt-7 text-[24px] tablet:text-[32px] desktop:text-[40px] desktop:mt-16"
        >
          Let us show you how
        </motion.h1>
      </div>
    </SectionLayout>
  );
};

export default Challenges;
