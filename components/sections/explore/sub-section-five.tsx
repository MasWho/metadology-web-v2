import SectionLayout from '../../layout/section-layout';
import DynamicReactPlayer from '../../video/DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '../../carousel/constants';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const VIDEO_URL = 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-five-video';
const THUMBNAIL_URL = 'https://d1r0ovlr0podg3.cloudfront.net/imgs/closer-look-video-thumbnail';

const ExploreSubsectionFive = () => {
  const { width } = useWindowDimensions();

  const { videoRatio } = screenToVideoSizeRatio(width!);
  const maxVideoWidth = 900;

  const getVideoWidth = () => {
    return Math.min(width! * videoRatio, maxVideoWidth);
  };

  const videoWidth = getVideoWidth();
  
  useEffect(() => {
    const element = document.getElementById("exploration-text");
    if(element) {
      element.style.width = `${videoWidth}px`;
    }
  }, [videoWidth]);

  return (
    <SectionLayout sectionName={'closer-look'} bgColor="bg-c-primary" noPadding>
      <div className="py-14 tablet:py-[100px] px-[2.5vw] tablet:px-[15vw]">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-c-heading text-center text-[26px] tablet:text-[34px] desktop:text-[42px] max-w-[900px] mx-auto"
        >
          Tailor Your Property&apos;s Exploration
        </motion.h1>
        <div className="w-fit mx-auto mt-10 border-c-secondary border-[2px] rounded-[15px]">
          <DynamicReactPlayer
            controls
            url={VIDEO_URL}
            playing={true}
            volume={1}
            muted={false}
            width={`${videoWidth}px`}
            height={`${videoWidth / VIDEO_RATIO}px`}
            light={THUMBNAIL_URL}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-c-section-heading flex flex-col mx-auto mt-10 text-[14px]"
          id="exploration-text"
        >
          <span>Embark on a solo adventure...</span>
          <span>Or opt for a guided tour led by our expert estate agents, all effortlessly</span>
          <span>from the convenience of your devic.</span>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionFive;
