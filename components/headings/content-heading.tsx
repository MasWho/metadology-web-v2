import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

type Props = {
  text: string;
  center?: boolean;
};

const ContentHeading = (props: Props) => {
  const { text, center } = props;
  const [scope, animate] = useAnimate();
  const [fade, setFade] = useState(false);
  let className = "text-c-heading text-[24px] ml-[15px] mt-[20px] tablet:text-[30px] tablet:ml-[45px] tablet:mt-[45px] laptop:text-[36px] laptop:ml-[90px] laptop:mt-[50px]";
  if(center) {
    className = "text-c-heading text-center mx-auto text-[24px] mt-[20px] w-[80%] tablet:text-[30px] tablet:mt-[45px] laptop:text-[36px] laptop:mt-[50px] laptop:w-[70%]"
  }

  const fadeOutText = useCallback(async () => {
    await animate(scope.current, {opacity: 0}, {duration: 0.5});
    setFade(true);
  }, [animate, scope])

  const fadeInText = useCallback(async () => {
    await animate(scope.current, {opacity: 1}, {duration: 0.5});
    setFade(false);
  }, [animate, scope])

  useEffect(() => {
    fadeOutText();
  }, [text, fadeOutText]);

  useEffect(() => {
    if(fade) {
      fadeInText();
    }
  }, [fade, fadeInText])

  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className={className}
      ref={scope}
    >
      {text}
    </motion.h1>
  );
};

export default ContentHeading;
