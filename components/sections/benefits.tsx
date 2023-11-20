import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import InnerHeading from '../headings/inner-heading';
import { motion } from 'framer-motion';
import ChevronArrow from '../arrows/chevron-arrow';
import SmallImageCarousel from '../carousel/small-image-carousel/small-image-carousel';

const images = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img1',
    text: 'Lorem ipsum, dolor sit amet consectetur desc1 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Lifestyle Estates'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img2',
    text: 'Lorem ipsum, dolor sit amet consectetur desc2 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Developers'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img3',
    text: 'Lorem ipsum, dolor sit amet consectetur desc3 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Real Estate Agents'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img4',
    text: 'Lorem ipsum, dolor sit amet consectetur desc4 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Buyers'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img5',
    text: 'Lorem ipsum, dolor sit amet consectetur desc5 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Commercial Property Rentals'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img6',
    text: 'Lorem ipsum, dolor sit amet consectetur desc6 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Towers'
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/benefits-img7',
    text: 'Lorem ipsum, dolor sit amet consectetur desc7 elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.',
    title: 'Something else'
  },
];

const Benefits = () => {
  return (
    <SectionLayout sectionName={'benefits'} bgColor="bg-c-primary" noPadding>
      <div className="relative pt-14 px-[5vw] tablet:px-[15vw] tablet:pt-[100px] tablet:pb-[50px]">
        {/* <div className='bg-c-secondary px-[5vw] tablet:px-[50px] max-w-[800px] mx-auto'> */}
          {/* Heading portion */}
          <SectionHeading text="Benefits" />
          <div className='flex flex-col justify-center mt-[10px] gap-[10px] tablet:flex-row tablet:justify-between items-center'>
            <InnerHeading text="How can we help you" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1
              }}
              transition={{ duration: 1 }}
              className="relative flex justify-center gap-10 mt-[10px] tablet:gap-3 tablet:mt-0"
            >
              <ChevronArrow
                direction="left"
                size="30px"
                inactive={false}
                onClick={() => {}}
              />
              <ChevronArrow
                direction="right"
                size="30px"
                inactive={false}
                onClick={() => {}}
              />
            </motion.div>
          </div>
        {/* </div> */}
      </div>
      <SmallImageCarousel images={images} />
      {/* Carousel portion */}
      {/* height here needs to be aligned to maximum height of  */}
      {/* <div className="relative left-[calc(50%-250px/2)] w-[250px] h-[250px] overflow-x-scroll no-scrollbar snap-mandatory snap-x"> */}
      {/* </div> */}
    </SectionLayout>
  );
};

export default Benefits;
