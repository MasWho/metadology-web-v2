import { generateClasses } from "@/utils/styling";
import React, { forwardRef } from "react";

const ContactLink = forwardRef((_, ref: any) => {
  return (
    <a
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:sales@meta-dology.com"
      className={generateClasses({
        generic: [
          'text-c-accent-green',
          'hover:cursor-pointer',
          'border-b-[1px]',
          'z-[100]'
        ],
        mobile: [
          'text-[1.2rem]'
        ],
        web: [
          'laptop:text-[1.8rem]'
        ],
      })}
    >
      sales@meta-dology.com
    </a>
  );
});

ContactLink.displayName = "ContactLink";
export default ContactLink;
