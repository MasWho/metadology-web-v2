import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren, ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import SectionButton from '../buttons/section-button';
import { AnimatePresence, useInView } from 'framer-motion';
import { useNavContext } from '@/contexts/NavContext';
import { AllSections } from '@/pages';

type Props = PropsWithChildren & {
  sectionName: AllSections;
  bgColor?: string;
  noPadding?: boolean;
  background?: ReactNode;
  readmore?: {
    title: string;
    popup: ReactNode;
    onOpen: () => void;
    isOpen: boolean;
  };
};

const SectionLayout = (props: Props) => {
  const {
    children,
    sectionName,
    bgColor = 'bg-c-primary',
    noPadding,
    background,
    readmore,
  } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.5 });
  const { setCurrentPageId } = useNavContext();

  useEffect(() => {
    if (isSectionInView) {
      setCurrentPageId(sectionName);
    }
  }, [isSectionInView, sectionName, setCurrentPageId]);

  return (
    <>
    <section
      id={sectionName!}
      ref={sectionRef}
      className={generateClasses({
        generic: ['relative', 'w-[100%]', `${bgColor}`],
        mobile: ['px-10'],
        web: ['tablet:px-30', 'laptop:px-40', 'desktop:px-60'],
      })}
      style={{
        padding: noPadding ? 0 : undefined,
        paddingBottom: readmore ? "1.25rem" : 0,
      }}
    >
      {background}
      {children}
      {readmore ? (
        <SectionButton sectionName={sectionName} show={isSectionInView} text={readmore.title} onClick={readmore.onOpen} />
      ) : null}
    </section>
    <AnimatePresence>
      {readmore?.isOpen && readmore?.popup}
    </AnimatePresence>
    </>
  );
};

export default SectionLayout;
