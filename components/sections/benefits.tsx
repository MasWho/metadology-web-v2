import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';

const Benefits = () => {
  return (
    <SectionLayout sectionName={'benefits'} bgColor="bg-c-primary" noPadding hasReadMore>
      <div className="py-[50px] px-[5vw] tablet:px-[20vw] tablet:py-[100px]">
        <SectionHeading text="Benefits" />
        <ContentHeading text="How we can help you" center />
      </div>
    </SectionLayout>
  );
};

export default Benefits;
