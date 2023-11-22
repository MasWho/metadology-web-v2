import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import ContentHeading from '../headings/content-heading';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '../carousel/constants';

const VIDEO_URL = 'https://d1r0ovlr0podg3.cloudfront.net/videos/closer-look-video';
const THUMBNAIL_URL = 'https://d1r0ovlr0podg3.cloudfront.net/imgs/closer-look-video-thumbnail';

const CloserLook = () => {
  const {width} = useWindowDimensions();
  
  const {videoRatio} = screenToVideoSizeRatio(width!);
  return (
    <SectionLayout sectionName={'closer-look'} bgColor="bg-c-primary" noPadding>
      <div className='py-14 px-[5vw] tablet:px-[20vw]'>
        <SectionHeading text="Take a closer look" />
        <ContentHeading text="The Elevator Pitch" />
        <div className='mx-auto w-fit mt-[40px] border-c-secondary border-[2px] rounded-[15px]'>
          <DynamicReactPlayer
            controls
            url={VIDEO_URL}
            playing={true}
            volume={1}
            muted={false}
            width={`${width! * videoRatio}px`}
            height={`${width! * videoRatio / VIDEO_RATIO}px`}
            light={THUMBNAIL_URL}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default CloserLook;
