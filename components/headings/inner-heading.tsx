import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
};

const InnerHeading = (props: Props) => {
  const { text } = props;

  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="text-c-heading text-[24px] tablet:text-[30px] laptop:text-[36px]"
    >
      {text}
    </motion.h1>
  );
};

export default InnerHeading;
