import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import VideoWithPhone from '@/components/video/VideoWithPhone';
import { motion } from 'framer-motion';

const VIDEO_URL = 'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-video-1';

const Sellfaster = () => {
  return (
    <SectionLayout sectionName={'sell-faster'} bgColor="bg-c-secondary" noPadding>
      <div className="py-[50px] px-[5vw] tablet:px-[20vw] tablet:py-[100px]">
        <motion.aside
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-[80vw] text-[22px] mb-[60px] tablet:max-w-[425px] tablet:text-[32px] desktop:max-w-[530px] desktop:text-[38px]"
        >
          <h1 className="text-c-section-heading">Interested?</h1>
          <h1 className="text-c-heading">Here are 3 ways we help you sell faster</h1>
          <hr className="bg-c-section-heading mt-3 h-[0.1px] border-0 w-[100%]" />
        </motion.aside>
        <SectionHeading text="1. Increase foot traffic" />
        <ContentHeading text="Turn social media clicks into live viewings" center />
        <VideoWithPhone videoUrl={VIDEO_URL} />
        {/* NOTE: This can be reused for other sections */}
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center text-c-heading mx-auto mt-[40px] tablet:w-[100%] tablet:mt-[50px] max-w-[800px]"
        >
          <div className='w-[80%]'>
          <h3 className="text-c-section-heading max-w-[200px] text-[14px] laptop:text-[18px]">
            Get buyers viewing your development in
          </h3>
          <h2 className="text-[24px] laptop:text-[34px]">1 Single Click</h2>
          <div className="flex flex-col tablet:flex-row tablet:justify-between">
            <p className="text-c-section-heading text-[14px] mt-[15px] tablet:max-w-[45%] laptop:text-[18px] laptop:mt-[25px]">
              <span className='text-c-heading'>Viewings into your development are a click away.</span> Our dynamic 3D model, accessible
              through any social media post or online channel, <span className='text-c-heading'>transforms each click into a live
              viewing experience.</span>
            </p>
            <p className="text-c-section-heading text-[14px] mt-[15px] tablet:max-w-[45%] laptop:text-[18px] laptop:mt-[25px]">
              Users encountering your post can click, watch an introduction video, and find
              themselves <span className='text-c-heading'>immersed in the heart of your property.</span>
            </p>
          </div>
          </div>
        </motion.article>
      </div>
    </SectionLayout>
  );
};

export default Sellfaster;
