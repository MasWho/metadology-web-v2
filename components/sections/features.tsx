import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import SectionLayout from '../layout/section-layout';
import { AnimatePresence, motion, useAnimate, useInView } from 'framer-motion';
import laptop from '../../public/imgs/laptop.png';
import furniture from '../../public/imgs/furniture.png';
import walls from '../../public/imgs/walls.png';
import Image from 'next/image';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import { PiSunLight, PiWall } from 'react-icons/pi';
import { FiLayers, FiMaximize2, FiTool } from 'react-icons/fi';

type ActiveFeature = {
  url: string;
  name: FeatureType;
  title: string;
  subTitle: string;
  content: string;
};

const features: ActiveFeature[] = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-1.mp4',
    name: 'time-of-day',
    title: 'Sunlight',
    subTitle: 'Time of day',
    content:
      'Potential buyers can experience how the sun & other light sources will effect each room. The Suns trajectory & arc is precisely mapped in relation to the coordinates of the Property, visual showcasing varying times of day and night, or changes in seasons.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-2.mp4',
    name: 'finishes',
    title: 'Finishes',
    subTitle: 'Experience your finishes',
    content:
      'Eliminate the guesswork for buyers when envisioning finishes or samples. Buyers can interact with the environment and see exactly how difficult finishes will look, and how they interact with light, furnishings, or different layouts.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-3.mp4',
    name: 'furnishes',
    title: 'Furnishes',
    subTitle: 'Furnished or Unfurnished',
    content:
      'Elevate your Property Offering with exquisite furnishings that unlock its full potential. Unbound by budget constraints. Explore the choice between furnished & unfurnished options, empowering buyers to envision the limitless possibilities.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-4.mp4',
    name: 'measurements',
    title: 'Measurements',
    subTitle: 'Quickly Guage Room Measurements',
    content:
      'Explore our Interactive Plans feature that seamlessly overlays the measurements as you navigate the 3D property, providing a holistic perspective on how the plans align with the actual space.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-5.mp4',
    name: 'utilities',
    title: 'Utilities',
    subTitle: 'Electrical pipes and Water',
    content:
      'Empower decorators, office layout planners, and service providers with precise information on the locations of water sources and electrical pipes. to accurate plan every wall and floor.',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/features-video-6.mp4',
    name: 'walls',
    title: 'Walls',
    subTitle: 'Walls Be Gone',
    content:
      'Effortlessly remove non-weight bearing walls. Toggle furniture on or off for an enhanced understanding of what lies behind every wall. Gain a true insight into the limitless possibilities that the space has to offer.',
  },
];

const FurnitureIcon = (props: { active: boolean }) => {
  const { active = false } = props;
  return (
    <i>
      <Image src={furniture} alt="furniture icon" style={{ opacity: active ? '' : '0.5' }} />
    </i>
  );
};

const WallIcon = (props: { active: boolean }) => {
  const { active = false } = props;
  return (
    <i>
      <Image src={walls} alt="walls icon" style={{ opacity: active ? '' : '0.5' }} />
    </i>
  );
};

const IconButton = (props: {
  icon: ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  const { icon, text, active = false, onClick } = props;

  return (
    <button
      className="flex items-center justify-center gap-2 min-w-[80px] px-2 py-1 text-[12px]"
      style={{
        outline: active ? '1px solid' : '',
        borderRadius: active ? '20px' : '',
        color: active ? 'white' : '#86868B',
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

const LaptopVideo = (props: { videoUrl: string; play?: boolean; onFinish?: () => void }) => {
  const { videoUrl, play, onFinish } = props;
  return (
    <div className="relative w-fit max-w-[880px]">
      <Image src={laptop} alt="Laptop showing a video" />
      {/* This is very specifically calculated based on the dimensions of the laptop image */}
      <div className="flex items-center w-full h-full absolute top-[0] pl-[12.5%] pr-[11.7%] pt-[11%] pb-[13.3%]">
        <AnimatePresence>
          <motion.div
            key={videoUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0, display: 'none' }}
            className="w-[667px]"
            id="laptop"
          >
            <DynamicReactPlayer
              loop
              url={videoUrl}
              playing={play}
              volume={1}
              muted={true}
              width={'100%'}
              height={'auto'}
              style={{
                borderRadius: 0,
              }}
              onEnded={onFinish}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeatureText = (props: { activeFeature: ActiveFeature }) => {
  const { activeFeature } = props;
  return (
    <AnimatePresence>
      <motion.aside
        key={activeFeature.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0, display: 'none' }}
        className="flex flex-col mt-6 items-center tablet:flex-row tablet:items-start tablet:mt-8 max-w-[800px] mx-auto"
        id="feature-info"
      >
        <div className="w-[100%] mb-6 tablet:mb-0 tablet:w-[50%]">
          <p className="text-c-heading text-center tablet:text-left text-[20px] tablet:text-[22px] laptop:text-[28px]">
            {activeFeature.title}
          </p>
          <p className="text-c-section-heading text-center tablet:text-left">
            {activeFeature.subTitle}
          </p>
        </div>
        <p className="w-[100%] px-8 text-center text-[14px] max-w-[500px] min-h-[105px] text-c-section-heading tablet:text-left tablet:w-[50%] tablet:text-[16px] tablet:min-h-[150px]">
          {activeFeature.content}
        </p>
      </motion.aside>
    </AnimatePresence>
  );
};

type FeatureType =
  | 'time-of-day'
  | 'finishes'
  | 'furnishes'
  | 'measurements'
  | 'utilities'
  | 'walls';
const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);
  const [scope, animate] = useAnimate();
  const isSectionInView = useInView(scope, { amount: 0.7 });

  const handleVideoFinish = () => {
    setActiveFeatureIndex((prev) => {
      if (prev === features.length - 1) {
        return 0;
      }
      return prev;
    });
  };

  const animateChangeFeature = async () => {
    // Text change animation
    await animate('#feature-info', { opacity: 0 }, { duration: 0.5 });
    await animate('#feature-info', { opacity: 1 }, { duration: 0.5 });
  };

  const activeFeature = features[activeFeatureIndex];
  return (
    <SectionLayout sectionName={'features'} bgColor="bg-c-primary" noPadding>
      <div className="relative py-14 px-[5vw] tablet:px-[15vw]" ref={scope}>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-c-section-heading text-center text-[20px] tablet:text-[26px] laptop:text-[32px]"
        >
          Showcase your property like never before
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="pb-2 border-b border-b-c-section-heading text-c-heading text-center mx-auto text-[24px] mt-[20px] w-[80%] tablet:text-[30px] tablet:mt-[45px] laptop:text-[36px] laptop:mt-[50px] max-w-[700px]"
        >
          A few flagship features that capture the buyers&apos; hearts
        </motion.p>
        <div className="w-[100%] flex flex-col items-center">
          <div className="grid grid-cols-2 gap-2 my-7 md-phone:grid-cols-3 laptop:grid-cols-6">
            <IconButton
              icon={<PiSunLight size={20} />}
              text="Time of day"
              active={activeFeature.name === 'time-of-day'}
              onClick={setActiveFeatureIndex.bind(null, 0)}
            />
            <IconButton
              icon={<FiLayers size={20} />}
              text="Finishes"
              active={activeFeature.name === 'finishes'}
              onClick={setActiveFeatureIndex.bind(null, 1)}
            />
            <IconButton
              icon={<FurnitureIcon active={activeFeature.name === 'furnishes'} />}
              text="Furnishes"
              active={activeFeature.name === 'furnishes'}
              onClick={setActiveFeatureIndex.bind(null, 2)}
            />
            <IconButton
              icon={<FiMaximize2 size={20} />}
              text="Measurements"
              active={activeFeature.name === 'measurements'}
              onClick={setActiveFeatureIndex.bind(null, 3)}
            />
            <IconButton
              icon={<FiTool size={20} />}
              text="Utilities"
              active={activeFeature.name === 'utilities'}
              onClick={setActiveFeatureIndex.bind(null, 4)}
            />
            <IconButton
              icon={<WallIcon active={activeFeature.name === 'walls'} />}
              text="Walls"
              active={activeFeature.name === 'walls'}
              onClick={setActiveFeatureIndex.bind(null, 5)}
            />
          </div>
          <LaptopVideo
            videoUrl={activeFeature.url}
            play={isSectionInView}
            onFinish={handleVideoFinish}
          />
        </div>
        <FeatureText activeFeature={activeFeature} />
      </div>
    </SectionLayout>
  );
};

export default Features;
