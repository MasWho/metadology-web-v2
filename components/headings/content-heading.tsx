import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
  center?: boolean;
};

const ContentHeading = (props: Props) => {
  const { text, center } = props;
  let className = "text-c-heading text-[24px] ml-[15px] mt-[20px] tablet:text-[30px] tablet:ml-[45px] tablet:mt-[45px] laptop:text-[36px] laptop:ml-[90px] laptop:mt-[50px]";
  if(center) {
    className = "text-c-heading text-center mx-auto text-[24px] mt-[20px] w-[80%] tablet:text-[30px] tablet:mt-[45px] laptop:text-[36px] laptop:mt-[50px] laptop:w-[70%]"
  }

  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className={className}
    >
      {text}
    </motion.h1>
  );
};

export default ContentHeading;
