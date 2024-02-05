import SectionLayout from '../../layout/section-layout';
import SectionHeading from '../../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import UltraRealismCarousel from '@/components/carousel/ultra-realism-carousel';

const videos = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-1',
    text: 'We bring unparalleled realism down to the last stitch of luxurious fabrics and the subtle grains of sumptuous leathers.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-2',
    text: 'Experience accurate physics as doors open and reflections bounce light in real-time.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-3',
    text: 'Witness the enchanting sight of curtain fabrics billowing in the wind.'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-4',
    text: 'Be enthralled by every blade of grass swaying gracefully in the wind.'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-5',
    text: 'Every surface is crafted to the specifications of its scientific properties, breaking the boundary between the digital world and real life.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/ultra-realism-section-one-video-6',
    text: 'Geospatial data ensures accurate illumination from the sun at all hours and during any season, replicating true-to-life lighting conditions.',
  },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((_, idx) => {
    progressLookup[idx] = 0;
  });
  return progressLookup;
};

const UltraRealismOne = () => {
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
    <SectionLayout sectionName={'ultra-realism'} bgColor="bg-c-secondary" noPadding>
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

export default UltraRealismOne;
