import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren, useRef } from 'react';
import SectionButton from '../buttons/section-button';
import { useInView } from 'framer-motion';

type Props = PropsWithChildren & {
  sectionName: string;
  hasReadMore?: boolean;
};

const SectionLayout = (props: Props) => {
  const { children, sectionName, hasReadMore } = props;
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
      {hasReadMore ? <SectionButton sectionName={sectionName} show={isSectionInView} /> : null}
    </section>
  );
};

export default SectionLayout;
