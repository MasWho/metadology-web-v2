import {motion} from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  text: ReactNode;
  onClick?: () => void;
};

const GreenButton = (props: Props) => {
  const { text, onClick } = props;

  return (
    <motion.button 
        whileHover={{
            scale: 1.1,
            transition: {duration: 0.2}
        }}
        className="text-c-heading bg-c-accent-green rounded-full py-2 px-7" onClick={onClick}>
      {text}
    </motion.button>
  );
};

export default GreenButton;
