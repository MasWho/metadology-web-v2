import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import DynamicReactPlayer from '@/components/video/DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { TABLET_SCREEN_SIZE, VIDEO_RATIO } from '@/components/carousel/constants';
const CollapsibleMenu = dynamic(() => import('@/components/menus/collapsible-menu'), {
  ssr: false,
});
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import ContentHeading from '@/components/headings/content-heading';
import Image from 'next/image';

const menuItems = [
  {
    heading: 'Award winning online events',
    content:
      "Unlock the power of virtual events! Immerse yourself in the firsthand account of the property's story, narrated by the developer, architect, and key stakeholders – all at no extra cost.",
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-video-2',
  },
  {
    heading: 'Sell or secure appointments',
    content:
      'Energized buyers can pay deposits live from within the platform or be put in contact with a sale representative to answer any questions',
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-img-1',
  },
  {
    heading: 'All the excitement without your time',
    content:
      'The online studio & AV team create professional recordings of the “live event” so that the event can be repeated. This allows buyers to get a personalized walkthrough while creating the urgency to secure the sale.  The result, all the excitement without any additional time from the properties key stake  holders.',
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-video-3',
  },
];

const SellfasterSubsectionOne = () => {
  const { width } = useWindowDimensions();
  const { videoRatio } = screenToVideoSizeRatio(width!);
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInview = useInView(sectionRef);

  let scalingRatio = 0.55;
  if (width! < TABLET_SCREEN_SIZE) {
    scalingRatio = 0.8;
  }
  const videoWith = width! * videoRatio * scalingRatio;

  const collapseOrOpenMenuItemHandler = (index: number) => {
    setCurrentMenuItemIndex(index);
  };

  const assets = menuItems.map((item, idx) => {
    const showAsset = currentMenuItemIndex === idx;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showAsset ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0"
        key={`significant-others-video-${idx}`}
        style={{
          zIndex: showAsset ? 1000 : 0,
        }}
      >
        {idx !== 1 ? (
          <DynamicReactPlayer
            controls
            url={item.url}
            playing={currentMenuItemIndex === idx && isInview}
            volume={1}
            muted={true}
            width={`${videoWith}px`}
            height={`${videoWith / VIDEO_RATIO}px`}
            style={{
              border: '1px solid grey',
              borderRadius: '15px',
            }}
          />
        ) : (
          <Image
            src={item.url}
            alt="sellfaster image"
            style={{
              objectFit: 'cover',
              border: '1px solid grey',
              borderRadius: '15px',
            }}
            width={1080}
            height={635}
          />
        )}
      </motion.div>
    );
  });

  return (
    <SectionLayout sectionName={'sell-faster'} bgColor="bg-c-secondary" noPadding>
      <div
        ref={sectionRef}
        className="pt-[30px] pb-[50px] px-[5vw] tablet:px-[10vw] desktop:px-[20vw] tablet:pb-[100px]"
      >
        <SectionHeading text="2. Online launch & sales events" />
        <ContentHeading text="Create a sense of urgency" />
        <div className="flex flex-col-reverse justify-evenly tablet:flex-row tablet:justify-evenly items-center w-[100%] mx-auto rounded-[15px] mt-[30px] tablet:mt-[50px] tablet:px-[2.5%] py-[20px] bg-c-primary min-h-[500px] tablet:min-h-[550px]">
          {/* Menu */}
          <CollapsibleMenu
            items={menuItems}
            onOpenOrCollapse={collapseOrOpenMenuItemHandler}
            openItemIndex={currentMenuItemIndex}
          />
          {/* Video */}
          <div className="rounded-[15px] relative w-[72vw] h-[41vw] tablet:w-[33vw] tablet:h-[19vw]">
            {assets}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default SellfasterSubsectionOne;
