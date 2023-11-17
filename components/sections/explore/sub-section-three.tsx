import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import UltraRealismCarousel from '@/components/carousel/ultra-realism-carousel';

const videos = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-2',
    text: 'Lorem ipsum dolor sit, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-3',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-4',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-5',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/explore-subsection-three-video-6',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam suscipit dolore aliquid eaque iure sit maxime ut hic rem voluptate, possimus temporibus.',
  },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((_, idx) => {
    progressLookup[idx] = 0;
  });
  return progressLookup;
};

const ExploreSubsectionThree = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [_, setVideoProgress] = useState(initialiseVideoProgressLookup);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { width } = useWindowDimensions();
  const carouselRef = useRef(null);
  const isCarouselInView = useInView(carouselRef, { amount: 0.7 });

  useEffect(() => {
    if(isCarouselInView) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [isCarouselInView])

  const videoProgressHandler = (index: number, progress: { played: number; loaded: number }) => {
    const { played } = progress;
    const completedNormalised = Math.floor(played * 100) + 1;
    if (played >= 1) {
      setCurrentVideoIndex((prev) => {
        if (prev !== videos.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setIsPlaying(true);
    }

    setVideoProgress((prev: any) => {
      return {
        ...prev,
        [index]: completedNormalised,
      };
    });
  };

  const changeVideoHandler = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const { carouselOffset, carouselElementMargin } = carouselVideoSizeRatio(width!);

  const carouselStyle = {
    left: carouselOffset,
  };

  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding>
      <div className="py-14" ref={carouselRef}>
        <div className="flex flex-col gap-6 relative" style={carouselStyle}>
          <div style={{ margin: `0 ${carouselElementMargin}` }}>
            <SectionHeading text="Realtime property sales with online deposits" />
            <ContentHeading text="Ultra-realism" />
          </div>
          <UltraRealismCarousel
            videos={videos}
            currentVideoIndex={currentVideoIndex}
            isPlaying={isPlaying}
            onVideoProgress={videoProgressHandler}
            onChangeVideo={changeVideoHandler}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionThree;