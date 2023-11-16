import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import iphone_border from '../../../public/imgs/iphone_border.svg';
import Image from 'next/image';
import VideoWithPhone from '@/components/video/VideoWithPhone';

const VIDEO_URL = 'https://d1r0ovlr0podg3.cloudfront.net/videos/test';

const Explore = () => {
  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-primary" noPadding hasReadMore>
      <div className='py-[100px] px-[5vw] tablet:px-[20vw]'>
        <SectionHeading text="Explore the full story." />
        <ContentHeading text="Harness social media to attract masses to your development" center/>
        <VideoWithPhone videoUrl={VIDEO_URL} />
      </div>
    </SectionLayout>
  );
};

export default Explore;
