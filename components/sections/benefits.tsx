import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import InnerHeading from '../headings/inner-heading';
import { motion, useAnimate } from 'framer-motion';
import ChevronArrow from '../arrows/chevron-arrow';
import SmallImageCarousel from '../carousel/small-image-carousel/small-image-carousel';
import { useEffect, useRef, useState } from 'react';
import ReadMoreButton from '../buttons/read-more-button';

const images = [
  {
    // TODO: change to img1 after testing
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img7',
    text: 'Lorem ipsum, dolor sit amet consectetur desc1 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Lifestyle Estates',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img2',
    text: 'Lorem ipsum, dolor sit amet consectetur desc2 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Developers',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img3',
    text: 'Lorem ipsum, dolor sit amet consectetur desc3 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Real Estate Agents',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img4',
    text: 'Lorem ipsum, dolor sit amet consectetur desc4 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Buyers',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img5',
    text: 'Lorem ipsum, dolor sit amet consectetur desc5 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Commercial Property Rentals',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img6',
    text: 'Lorem ipsum, dolor sit amet consectetur desc6 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Towers',
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img7',
    text: 'Lorem ipsum, dolor sit amet consectetur desc7 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Something else',
  },
];

const Benefits = () => {
  const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = useState(Math.floor(images.length / 2));
  const [scope, animate] = useAnimate();

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

  const animateButtonForIndexChange = async () => {
    await animate('svg', {scale: 1.1}, {duration: 0.2});
    await animate('svg', {scale: 1}, {duration: 0.2});
    await animate('svg', {scale: 1.1}, {duration: 0.2});
    await animate('svg', {scale: 1.0}, {duration: 0.2});
  }

  useEffect(() => {
    animateButtonForIndexChange();
  }, [currentFocusedItemIndex])
  
  return (
    <SectionLayout sectionName={'benefits'} bgColor="bg-c-primary" noPadding>
      <div className="relative py-14 px-[5vw] tablet:px-[15vw]">
        <div className="flex flex-col gap-3 bg-c-secondary px-[5vw] py-[30px] laptop:py-[50px] tablet:px-[50px] max-w-[800px] mx-auto">
          {/* Heading portion */}
          <SectionHeading text="Benefits" />
          <div className="flex flex-col justify-center gap-[10px] mb-[10px] tablet:mb-[20px] tablet:flex-row tablet:justify-between items-center">
            <InnerHeading text="How can we help you" />
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
          <div className='w-[100%] flex justify-center laptop:mt-5' ref={scope}>
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Benefits;
