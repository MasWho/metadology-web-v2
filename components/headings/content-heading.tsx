import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
};

const ContentHeading = (props: Props) => {
  const { text } = props;
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="text-c-heading text-[24px] ml-[15px] mt-[20px] tablet:text-[30px] tablet:ml-[45px] tablet:mt-[45px] laptop:text-[36px] laptop:ml-[90px] laptop:mt-[45px]"
    >
      {text}
    </motion.h1>
  );
};

export default ContentHeading;
