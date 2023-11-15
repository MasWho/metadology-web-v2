import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
};

const SectionHeading = (props: Props) => {
  const { text } = props;
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1
      }}
      className="text-c-section-heading text-[20px] tablet:text-[26px] laptop:text-[32px]"
    >
      {text}
    </motion.h1>
  );
};

export default SectionHeading;
