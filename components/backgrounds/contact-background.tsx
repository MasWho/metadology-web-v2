import { generateClasses } from "@/utils/styling";
import Image from "next/image";
import React from "react";
import bubble from "../../public/imgs/bubble.png";
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
        generic: ["absolute", "rotate-[14deg]"],
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
          generic: ["absolute", "rotate-[30deg]"],
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

const ContactBackground = () => {
  return (
    <>
      <LeftBubble />
      <RightBubble />
    </>
  );
};

export default ContactBackground;
