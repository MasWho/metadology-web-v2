import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import DynamicReactPlayer from '@/components/video/DynamicReactPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '@/components/carousel/constants';
import CollapsibleMenu from '@/components/menus/collapsible-menu';
import { useState } from 'react';

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
  const [currentVideoUrl, setCurrentVideoUrl] = useState(menuItems[0].url);
  const videoWith = width! * videoRatio * 0.55;

  const collapseOrOpenMenuItemHandler = (index: number) => {
    setCurrentMenuItemIndex(index);
    setCurrentVideoUrl(menuItems[index].url);
  };

  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding>
      <div className="pt-[30px] pb-[50px] px-[5vw] tablet:px-[20vw] tablet:pb-[100px]">
        <SectionHeading text="Significant others" />
        <div className="flex justify-between w-[100%] mx-auto rounded-[15px] mt-[50px] px-[5%] py-[20px] bg-c-primary">
          {/* Menu */}
          <CollapsibleMenu
            items={menuItems}
            onOpenOrCollapse={collapseOrOpenMenuItemHandler}
            openItemIndex={currentMenuItemIndex}
          />
          {/* Video */}
          <div className="flex flex-col justify-center rounded-[15px]">
            <DynamicReactPlayer
              controls
              url={currentVideoUrl}
              playing={false}
              volume={1}
              muted={true}
              width={`${videoWith}px`}
              height={`${videoWith / VIDEO_RATIO}px`}
              style={{
                border: '1px solid grey',
                borderRadius: '15px',
              }}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionOne;
