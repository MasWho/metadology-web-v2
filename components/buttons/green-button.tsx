import {motion} from 'framer-motion';

type Props = {
  text: string;
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
        className="text-c-heading bg-c-accent-green rounded-full py-3 px-5" onClick={onClick}>
      {text}
    </motion.button>
  );
};

export default GreenButton;
