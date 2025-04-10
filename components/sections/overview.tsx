import SectionLayout from '../layout/section-layout';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '../carousel/constants';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const VIDEO_URL = 'https://fast.wistia.net/embed/iframe/vdhtid2v50';
const THUMBNAIL_URL = 'https://d1r0ovlr0podg3.cloudfront.net/imgs/elevator-pitch-video-thumbnail';
const SECTION_ID = 'overview';

const Overview = () => {
  const { width } = useWindowDimensions();
  const { asPath } = useRouter();
  const { videoRatio } = screenToVideoSizeRatio(width!);
  const maxVideoWidth = 900;

  useEffect(() => {
    if (asPath.includes(`#company-overview`)) {
      const videoSection = document.getElementById(SECTION_ID);
      if (videoSection) {
        setTimeout(() => {
          videoSection.scrollIntoView({ block: 'center' });
        }, 300);
      }
    }
  }, [width, asPath]);

  const getVideoWidth = () => {
    return Math.min(width! * videoRatio, maxVideoWidth);
  };

  return (
    <SectionLayout sectionName={SECTION_ID} bgColor="bg-c-secondary" noPadding>
      <div className="py-14 tablet:py-[100px] px-[2.5vw] tablet:px-[15vw]">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-c-heading text-center text-[26px] tablet:text-[34px] desktop:text-[42px]"
        >
          We know you&apos;re busy...
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-c-section-heading text-center mt-8 text-[16px] tablet:text-[24px] desktop:text-[32px]"
        >
          Here is everything you need to know in 4 minutes
        </motion.p>
        <div className="w-fit mx-auto mt-5 border-c-secondary border-[2px] rounded-[15px]">
          <DynamicReactPlayer
            controls
            url={VIDEO_URL}
            playing={true}
            volume={1}
            muted={false}
            width={`${getVideoWidth()}px`}
            height={`${getVideoWidth() / VIDEO_RATIO}px`}
            light={THUMBNAIL_URL}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Overview;
