import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';

const ExploreSubsectionTwo = () => {
  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding hasReadMore>
      <div className="pt-[30px] pb-[50px] px-[5vw] laptop:px-[15vw] desktop:px-[20vw] tablet:pb-[100px]">
        <SectionHeading text="Realtime property sales with online deposits" />
        <ContentHeading text="Streamline Sales" />
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionTwo;