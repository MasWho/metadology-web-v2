import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import ContentHeading from '@/components/headings/content-heading';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import UltraRealismCarousel from '@/components/carousel/ultra-realism-carousel';
import PartnersTicker from '../ticker/partners-ticker';

// TODO: Actually upload the videos and thumbnails
const videos = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/portfolio-video-1',
    text: 'We were tasked with demonstrating the potential of this three-building complex: adaptable as an office park or transformed into residential units. See how we Simplified the investors decision by showcasing both opportunities.',
    thumbnail: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/portfolio-video-1-thumbnail',
    title: 'Revolutionizing Office Park Sales'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/portfolio-video-2',
    text: 'Challenged  by a skeptical developer, we shattered doubts on 3D models versus renders. Witness how 21 days revolutionized perceptions.',
    thumbnail: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/portfolio-video-2-thumbnail',
    title: 'Renders vs Models: Galileo'
  },
  // {
  //   url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/portfolio-video-3',
  //   text: 'As the CPB floor lease ended, we exhibited the space with our 3D technology, enabling exploration of various layouts seamlessly, ensuring uninterrupted tenant operations. Witness our innovative solution.',
  //   thumbnail: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/closer-look-video-thumbnail',
  //   title: 'Commercial Property: Strategizing around Existing Tenants'
  // },
  // {
  //   url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/portfolio-video-4',
  //   text: 'Pioneering urban transformation, our technology enabled pre-sales despite existing buildings. Buyers could experience the final development in complete clarity allowing sales to commence before  ground had even been broken.',
  //   thumbnail: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/closer-look-video-thumbnail',
  //   title: 'Selling before ground was even broken'
  // },
  // {
  //   url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/portfolio-video-5',
  //   text: 'Transforming property sales: Say goodbye to guesswork and visualize seamless transformations. Witness the evolution of property sales firsthand.',
  //   thumbnail: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/closer-look-video-thumbnail',
  //   title: 'The Next Evolution In Selling Homes',
  // },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((_, idx) => {
    progressLookup[idx] = 0;
  });
  return progressLookup;
};

const Portfolio = () => {
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
    <SectionLayout sectionName={'portfolio'} bgColor="bg-c-primary" noPadding>
      <div className="py-14" ref={carouselRef}>
        <div className="flex flex-col gap-6 relative" style={carouselStyle}>
          <div style={{ margin: `0 ${carouselElementMargin}` }}>
            <SectionHeading text="Our recent work" />
            <ContentHeading text={videos[currentVideoIndex].title} />
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
      <div className='py-20'>
        <PartnersTicker />
      </div>
    </SectionLayout>
  );
};

export default Portfolio;
