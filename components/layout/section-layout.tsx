import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren, useRef } from 'react';
import SectionButton from '../buttons/section-button';
import { useInView } from 'framer-motion';

type Props = PropsWithChildren & {
  sectionName: string;
};

const SectionLayout = (props: Props) => {
  const { children, sectionName } = props;
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {amount: 0.5});

  return (
    <section
      ref={sectionRef}
      className={generateClasses({
        generic: ['relative', 'w-[100%]'],
        mobile: ['px-10', 'py-10'],
        web: ['tablet:px-30', 'laptop:px-40', 'desktop:px-60'],
      })}
    >
      {children}
      <SectionButton sectionName={sectionName} show={isSectionInView} />
    </section>
  );
};

export default SectionLayout;
