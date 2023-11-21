import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import ImageDisplay from '@/components/images/image-display';
import { motion } from 'framer-motion';

const images = [
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/forefront-gif' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/forefront-img1' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/forefront-img2' },
];

const Forefront = () => {
  return (
    <SectionLayout sectionName={'forefront'} bgColor="bg-c-secondary" noPadding>
      <div className="py-[50px] px-[5vw] tablet:px-[20vw] tablet:py-[100px]">
        <SectionHeading text="Be at the forefront" />
        <ContentHeading text="Spatial Computing" center />
        <ImageDisplay images={images} reverse />
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-c-heading flex flex-col w-[100%] lg-phone:flex-row lg-phone:justify-evenly mt-[40px] lg-phone:mt-[50px] max-w-[800px] mx-auto"
        >
          <div className="w-[100%] lg-phone:w-[40%] laptop:w-[30%]">
            <p className="text-c-section-heading text-[14px] mt-[15px] laptop:text-[18px] laptop:mt-[25px]">
              Lorem ipsum dolor, sit amet consectetur. excepturi eum, autem,{' '}
              <b className="text-c-heading">
                Explicabo iure quasi itaque saepe quam inventore sunt voluptates,
              </b>{' '}
              ut consequuntur quod modi.
            </p>
          </div>
          <div className="w-[100%] lg-phone:w-[40%] laptop:w-[30%]">
            <p className="text-c-section-heading text-[14px] mt-[15px] laptop:text-[18px] laptop:mt-[25px]">
              Lorem ipsum dolor, sit amet consectetur. excepturi eum, autem,{' '}
              <b className="text-c-heading">
                Explicabo iure quasi itaque saepe quam inventore sunt voluptates,
              </b>{' '}
              ut consequuntur quod modi.
            </p>
          </div>
        </motion.article>
      </div>
    </SectionLayout>
  );
};

export default Forefront;
