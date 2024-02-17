import React from "react";
import { generateClasses } from "@/utils/styling";

const ContactHeader = () => {
  return (
    <header
      className={generateClasses({
        generic: [
          "text-c-heading",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
          "text-center",
          'z-[100]'
        ],
        mobile: ["gap-2"],
        web: ["laptop:gap-6", "laptop:max-w-[1280px]"],
      })}
    >
      <p
        className={generateClasses({
          generic: ["text-c-subtext"],
          mobile: ["text-[0.8rem]"],
          web: ["laptop:text-[1.2rem]"],
        })}
      >
        CONTACT US
      </p>
      <h1
        className={generateClasses({
          generic: ["font-bold"],
          mobile: ["text-[1.8rem]"],
          web: ["laptop:text-[2.5rem]"],
        })}
      >
        Need to speak to a meta-dologist?
      </h1>
      <p
        className={generateClasses({
          generic: ["text-c-subtext"],
          mobile: ["text-[0.8rem]"],
          web: ["laptop:text-[1.2rem]"],
        })}
      >
        We are excited to take on new projects, and we welcome the opportunity
        to work with clients from all over the world. If you&apos;re interested in
        discussing your metaverse project, please don&apos;t hesitate to contact us.
      </p>
      <p
        className={generateClasses({
          generic: ["text-c-subtext"],
          mobile: ["text-[0.8rem]", "pt-10"],
          web: ["laptop:text-[1.2rem]"],
        })}
      >
        Start a conversation
      </p>
    </header>
  );
};

export default ContactHeader;
