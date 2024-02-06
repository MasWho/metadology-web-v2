import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import InnerHeading from '../headings/inner-heading';
import { motion, useAnimate } from 'framer-motion';
import ChevronArrow from '../arrows/chevron-arrow';
import SmallImageCarousel from '../carousel/small-image-carousel/small-image-carousel';
import { useCallback, useEffect, useState } from 'react';
import ReadMoreButton from '../buttons/read-more-button';

const images = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img1',
    text: 'Buyers can step into their dream lifestyle estate. Explore every corner & envision their new life.',
    title: 'Lifestyle Estates',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img2',
    text: 'Sell faster. Expand buyer base. Streamline selling. Simplify the process. Optimize your property development sales journey.',
    title: 'Developers',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img3',
    text: 'Maximize sales potential. Generate leads effortlessly. Streamline buying. Revolutionize real estate transactions.',
    title: 'Real Estate Agents',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img4',
    text: 'Let buyers experience their dream property. Click to discover how we simplify your purchasing decision.',
    title: 'Buyers',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img5',
    text: 'Explore diverse layouts & space possibilities. Unveil how the property maximizes business potential.',
    title: 'Commercial Property Rentals',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefit-img6',
    text: 'Selling property in a tower is more than a flat image. Let buyers experience panoramic views, lavish finishes & doorstep amenities',
    title: 'Towers',
  },
];

const Benefits = () => {
  const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = useState(Math.floor(images.length / 2));
  // const [scope, animate] = useAnimate();

  const handleChangeCarouselItem = (type: 'inc' | 'dec') => {
    setCurrentFocusedItemIndex(prev => {
      let currIndex = prev;
      if(type === 'inc') {
        currIndex = Math.min(images.length - 1, currIndex + 1);
      } else {
        currIndex = Math.max(0, currIndex - 1);
      }
      return currIndex;
    })
  };

  // const animateButtonForIndexChange = useCallback(async () => {
  //   await animate('svg', {scale: 1.1}, {duration: 0.2});
  //   await animate('svg', {scale: 1}, {duration: 0.2});
  //   await animate('svg', {scale: 1.1}, {duration: 0.2});
  //   await animate('svg', {scale: 1.0}, {duration: 0.2});
  // }, [animate])

  // useEffect(() => {
  //   animateButtonForIndexChange();
  // }, [currentFocusedItemIndex, animateButtonForIndexChange])
  
  return (
    <SectionLayout sectionName={'benefits'} bgColor="bg-c-primary" noPadding>
      <div className="relative py-14 px-[5vw] tablet:px-[15vw]">
        <div className="flex flex-col gap-3 bg-c-secondary px-[5vw] py-[30px] laptop:py-[50px] tablet:px-[50px] max-w-[800px] mx-auto">
          {/* Heading portion */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="text-c-heading text-[24px] tablet:text-[30px] laptop:text-[36px] text-center"
          >
            With so many advantages...
          </motion.h1>
          <div className="flex flex-col justify-center mx-auto gap-[10px] tablet:gap-[60px] mb-[10px] tablet:mb-[20px] tablet:flex-row tablet:justify-between items-center max-w-[650px]">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1
              }}
              className="text-c-section-heading text-[14px] tablet:text-[16px] laptop:text-[18px]"
            >
              Choose Your Role and Dive into Tailored benefits That Await!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              transition={{ duration: 1 }}
              className="relative flex justify-center gap-10 mt-[10px] tablet:gap-3 tablet:mt-0"
            >
              <ChevronArrow direction="left" size="30px" inactive={currentFocusedItemIndex === 0} onClick={handleChangeCarouselItem.bind(null, 'dec')} />
              <ChevronArrow direction="right" size="30px" inactive={currentFocusedItemIndex === images.length - 1} onClick={handleChangeCarouselItem.bind(null, 'inc')} />
            </motion.div>
          </div>
          {/* Carousel portion */}
          <SmallImageCarousel
            images={images}
            currentFocusedItemIndex={currentFocusedItemIndex}
            setCurrentFocusedItemIndex={setCurrentFocusedItemIndex}
          />
          {/* <div className='w-[100%] flex justify-center laptop:mt-5' ref={scope}>
            <ReadMoreButton />
          </div> */}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Benefits;
