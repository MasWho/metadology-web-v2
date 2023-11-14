import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren, useEffect, useLayoutEffect, useRef } from 'react';
import SectionButton from '../buttons/section-button';
import { useInView } from 'framer-motion';
import { useNavContext } from '@/contexts/NavContext';
import { AllSections } from '@/pages';

type Props = PropsWithChildren & {
  sectionName: AllSections;
  hasReadMore?: boolean;
};

const SectionLayout = (props: Props) => {
  const { children, sectionName, hasReadMore } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, {amount: 0.5});
  const {setCurrentPageId} = useNavContext();

  useEffect(() => {
    if(isSectionInView) {
      setCurrentPageId(sectionName);
    }
  }, [isSectionInView, sectionName]);

  return (
    <section
      id={sectionName!}
      ref={sectionRef}
      className={generateClasses({
        generic: ['relative', 'w-[100%]'],
        mobile: ['px-10'],
        web: ['tablet:px-30', 'laptop:px-40', 'desktop:px-60'],
      })}
    >
      {children}
      {hasReadMore ? <SectionButton sectionName={sectionName} show={isSectionInView} /> : null}
    </section>
  );
};

export default SectionLayout;
