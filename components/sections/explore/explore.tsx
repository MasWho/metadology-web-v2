import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import VideoWithPhone from '@/components/video/VideoWithPhone';
import { motion } from 'framer-motion';

const VIDEO_URL = 'https://d1r0ovlr0podg3.cloudfront.net/videos/test';

const Explore = () => {
  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding hasReadMore>
      <div className="py-[50px] px-[5vw] tablet:px-[20vw] tablet:py-[100px]">
        <SectionHeading text="Explore the full story." />
        <ContentHeading text="Harness social media to attract masses to your development" center />
        <VideoWithPhone videoUrl={VIDEO_URL} />
        {/* NOTE: This can be reused for other sections */}
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-c-heading flex justify-evenly mt-[40px] tablet:mt-[50px] max-w-[800px] mx-auto"
        >
          <div className="w-[40%] laptop:w-[30%]">
            <h3 className="text-c-section-heading text-[14px] laptop:text-[18px]">
              Start a viewing with
            </h3>
            <h2 className="text-[20px] laptop:text-[30px]">1 Single Click</h2>
            <p className="text-c-section-heading text-[14px] mt-[15px] laptop:text-[18px] laptop:mt-[25px]">
              Imagine getting a potential buyer into your development was{' '}
              <b className="text-c-heading">as simple as 1 click</b>
            </p>
          </div>
          <div className="w-[40%] laptop:w-[30%]">
            <h3 className="text-c-section-heading text-[14px] laptop:text-[18px]">
              Start a viewing with
            </h3>
            <h2 className="text-[20px] laptop:text-[30px]">1 Single Click</h2>
            <p className="text-c-section-heading text-[14px] mt-[15px] laptop:text-[18px] laptop:mt-[25px]">
              Imagine getting a potential buyer into your development was{' '}
              <b className="text-c-heading">as simple as 1 click</b>
            </p>
          </div>
        </motion.article>
      </div>
    </SectionLayout>
  );
};

export default Explore;
