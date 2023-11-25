import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren, useEffect, useLayoutEffect, useRef } from 'react';
import SectionButton from '../buttons/section-button';
import { useInView } from 'framer-motion';
import { useNavContext } from '@/contexts/NavContext';
import { AllSections } from '@/pages';

type Props = PropsWithChildren & {
  sectionName: AllSections;
  hasReadMore?: boolean;
  bgColor?: string;
  noPadding?: boolean;
};

const SectionLayout = (props: Props) => {
  const { children, sectionName, hasReadMore, bgColor = 'bg-c-primary', noPadding } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, {amount: 0.5});
  const {setCurrentPageId} = useNavContext();

  useEffect(() => {
    if(isSectionInView) {
      setCurrentPageId(sectionName);
    }
  }, [isSectionInView, sectionName, setCurrentPageId]);

  return (
    <section
      id={sectionName!}
      ref={sectionRef}
      className={generateClasses({
        generic: ['relative', 'w-[100%]', `${bgColor}`],
        mobile: ['px-10'],
        web: ['tablet:px-30', 'laptop:px-40', 'desktop:px-60'],
      })}
      style={{
        padding: noPadding ? 0 : undefined
      }}
    >
      {children}
      {hasReadMore ? <SectionButton sectionName={sectionName} show={isSectionInView} /> : null}
    </section>
  );
};

export default SectionLayout;
