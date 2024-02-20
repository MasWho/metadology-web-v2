import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import ImageDisplay from '@/components/images/image-display';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SubsectionTwoPopup from '@/components/popups/sub-section-two-popup';

const images = [
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-sub-section-two-img-1' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-sub-section-two-img-2' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-sub-section-two-img-3' },
];

const SellfasterSubsectionTwo = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const readmore = {
    title: "More on payments & inventory",
    onOpen: () => setPopupOpen(true),
    popup: <SubsectionTwoPopup onClose={() => setPopupOpen(false)} />,
    isOpen: popupOpen
  };

  return (
    <SectionLayout sectionName={'sell-faster'} bgColor="bg-c-secondary" noPadding readmore={readmore}>
      <div className="py-[50px] px-[5vw] tablet:px-[20vw]">
        <SectionHeading text="3. Realtime property sales" />
        <ContentHeading text="Browse, Select, Pay and Secure" center />
        <ImageDisplay images={images} />
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-c-heading flex flex-col w-[100%] lg-phone:flex-row lg-phone:justify-evenly mt-[20px] lg-phone:mt-[25px] max-w-[800px] mx-auto"
        >
          <div className="w-[100%] lg-phone:w-[40%] laptop:w-[30%]">
            <p className="text-c-section-heading text-[14px] mt-[10px] laptop:text-[18px] laptop:mt-[15px]">
              After exploring,{' '}
              <b className="text-c-heading">
                buyers can browse, select, and secure their dream property
              </b>{' '}
              with ease on our streamlined platform
            </p>
          </div>
          <div className="w-[100%] lg-phone:w-[40%] laptop:w-[30%]">
            <p className="text-c-section-heading text-[14px] mt-[10px] laptop:text-[18px] laptop:mt-[15px]">
              Filter through options, pick the perfect match, and{' '}
              <b className="text-c-heading">
                seal the deal instantly with a securing deposit.
              </b>
            </p>
          </div>
        </motion.article>
      </div>
    </SectionLayout>
  );
};

export default SellfasterSubsectionTwo;
