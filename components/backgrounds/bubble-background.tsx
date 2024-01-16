import { generateClasses } from "@/utils/styling";
import Image from "next/image";
import bubble from "../../public/imgs/bubble.png";
import small_bubble from "../../public/imgs/small_bubble.png";
import { motion } from "framer-motion";

const LeftBubble = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={generateClasses({
        generic: ["absolute", "rotate-[14deg]", "z-0"],
        mobile: [
          "top-[15vh]",
          "left-[-60vw]",
          "min-[480px]:left-[-30vw]",
          "w-[300px]",
          "lg-phone:w-[340px]",
        ],
        web: [
          "tablet:w-[380px]",
          "laptop:w-[420px]",
          "desktop:w-[460px]",
          "laptop:left-[-25vw]",
          "desktop:left-[-15vw]",
        ],
      })}
    >
      <Image
        src={bubble}
        alt="Left Bubble background"
        width={660}
        height={400}
      />
    </motion.div>
  );
};

const RightBubble = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 0.95, 1],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={generateClasses({
        generic: ["absolute", "rotate-[30deg]", "z-0"],
        mobile: [
          "top-[45vh]",
          "right-[-55vw]",
          "min-[480px]:right-[-30vw]",
          "w-[300px]",
          "lg-phone:w-[340px]",
        ],
        web: [
          "tablet:w-[380px]",
          "laptop:w-[420px]",
          "desktop:w-[460px]",
          "laptop:right-[-25vw]",
          "desktop:right-[-15vw]",
        ],
      })}
    >
      <Image
        src={bubble}
        alt="Right Bubble background"
        width={660}
        height={400}
      />
    </motion.div>
  );
};

const TopSmallBubble = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 0.9, 0.8, 0.8, 0.9, 1],
        rotate: [0, 80, 160, -20, -10, 0],
        x: [0, 20, 60, -60, -20, 0],
        y: [0, 30, 40, -40, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={generateClasses({
        generic: [
          "absolute",
          "z-0"
        ],
        mobile: ["top-[15vh]", "right-[20vw]"],
        web: [],
      })}
    >
      <Image
        src={small_bubble}
        alt="Right Bubble background"
        width={103}
        height={103}
      />
    </motion.div>
  );
};

const BottomSmallBubble = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 0.9, 0.8, 0.8, 0.9, 1],
        rotate: [0, 80, 160, -20, -10, 0],
        x: [0, 20, 60, -60, -20, 0],
        y: [0, 30, 40, -40, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0,
      }}
      className={generateClasses({
        generic: ["absolute", "z-0"],
        mobile: ["top-[70vh]", "left-[20vw]"],
        web: [],
      })}
    >
      <Image
        src={small_bubble}
        alt="Right Bubble background"
        width={60}
        height={60}
      />
    </motion.div>
  );
};

const BubbleBackground = () => {
  return (
    <>
      <LeftBubble />
      <RightBubble />
      <TopSmallBubble />
      <BottomSmallBubble />
    </>
  );
};

export default BubbleBackground;
