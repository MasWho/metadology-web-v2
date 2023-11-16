import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import DynamicReactPlayer from '@/components/video/DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '@/components/carousel/constants';
import CollapsibleMenu from '@/components/menus/collapsible-menu';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const menuItems = [
  {
    heading: 'Online Launch Events',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae similique at sed nesciunt quidem provident tempora eligendi.',
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test',
  },
  {
    heading: 'Integrate Sales and Bookings',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae similique at sed nesciunt quidem provident tempora eligendi.',
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test',
  },
  {
    heading: 'Made to Feel Live',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae similique at sed nesciunt quidem provident tempora eligendi.',
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test',
  },
];

const ExploreSubsectionOne = () => {
  const { width } = useWindowDimensions();
  const { videoRatio } = screenToVideoSizeRatio(width!);
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInview = useInView(sectionRef);
  const videoWith = width! * videoRatio * 0.55;

  const collapseOrOpenMenuItemHandler = (index: number) => {
    setCurrentMenuItemIndex(index);
  };

  const videoPlayers = menuItems.map((item, idx) => {
    const showVideo = currentMenuItemIndex === idx;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0"
        key={`significant-others-video-${idx}`}
        style={{
            zIndex: showVideo ? 1000 : 0
        }}
      >
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
      </motion.div>
    );
  });

  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding>
      <div ref={sectionRef} className="pt-[30px] pb-[50px] px-[5vw] laptop:px-[15vw] desktop:px-[20vw] tablet:pb-[100px]">
        <SectionHeading text="Significant others" />
        <div className="flex justify-between items-center w-[100%] mx-auto rounded-[15px] mt-[50px] px-[5%] py-[20px] bg-c-primary min-h-[550px]">
          {/* Menu */}
          <CollapsibleMenu
            items={menuItems}
            onOpenOrCollapse={collapseOrOpenMenuItemHandler}
            openItemIndex={currentMenuItemIndex}
          />
          {/* Video */}
          <div
            className="rounded-[15px] relative w-[50vw] h-[28vw] tablet:w-[33vw] tablet:h-[19vw]"
            style={{ width: `${videoWith}px`, height: `${videoWith / VIDEO_RATIO}px` }}
          >
            {videoPlayers}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionOne;
