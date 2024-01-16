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
  const maxVideoWidth = 900;

  const getVideoWidth = () => {
    return Math.min(width! * videoRatio, maxVideoWidth);
  }

  return (
    <SectionLayout sectionName={'closer-look'} bgColor="bg-c-secondary" noPadding>
      <div className='py-14 tablet:py-[100px] px-[5vw] tablet:px-[20vw]'>
        <h1 className='text-c-heading text-center text-[26px] tablet:text-[34px] desktop:text-[42px]'>We know you&apos;re busy...</h1>
        <p className='text-c-section-heading text-center mt-8 text-[16px] tablet:text-[24px] desktop:text-[32px]'>Here is your complete guide unwrapped in 2 Minutes</p>
        <div className='w-fit mx-auto mt-5 border-c-secondary border-[2px] rounded-[15px]'>
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

export default CloserLook;
