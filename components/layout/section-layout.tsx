import { generateClasses } from '@/utils/styling';
import React, { PropsWithChildren } from 'react';
import SectionButton from '../buttons/section-button';

type Props = PropsWithChildren & {
  sectionName: string;
};

const SectionLayout = (props: Props) => {
  const { children, sectionName } = props;
  return (
    <section
      className={generateClasses({
        generic: ['relative', 'w-[100%]'],
        mobile: ['px-10', 'py-10'],
        web: ['tablet:px-30', 'laptop:px-40', 'desktop:px-60'],
      })}
    >
      {children}
      <SectionButton sectionName={sectionName} />
    </section>
  );
};

export default SectionLayout;
