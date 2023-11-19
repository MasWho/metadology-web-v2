import LargeImageCarousel from '@/components/carousel/large-image-carousel/large-image-carousel';
import SectionLayout from '../../layout/section-layout';
import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

const images = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img4',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img5',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img6',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-sub-section-four-img7',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
];

const ExploreSubsectionFour = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {amount: 0.7});
  const showHeading = async () => {
    await animate(`#from-the`, {opacity: 1}, {duration: 0.5});
    await animate(`#big-picture`, {opacity: 1}, {duration: 0.5});
    await animate(`#to-the`, {opacity: 1}, {duration: 0.5});
    await animate(`#small-details`, {opacity: 1}, {duration: 0.5});
  };

  const removeHeading = async () => {
    animate(`#from-the`, {opacity: 0}, {duration: 0.5});
    animate(`#big-picture`, {opacity: 0}, {duration: 0.5});
    animate(`#to-the`, {opacity: 0}, {duration: 0.5});
    animate(`#small-details`, {opacity: 0}, {duration: 0.5});
  }

  useEffect(() => {
    if(isInView) {
      showHeading();
    } else {
      removeHeading();
    }
  }, [isInView])

  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding>
      <div ref={scope} className="relative py-14 flex flex-col left-[2.5vw] mx-[2.5vw] tablet:left-[20vw] tablet:mx-[5vw]">
        {/* Very custom Heading */}
        <h1 className="text-[20px] tablet:text-[24px] text-c-section-heading">
          <p>
            <span id="from-the" className='opacity-0'>From the </span>
            <b id="big-picture" className="opacity-0 text-c-heading text-[38px] tablet:text-[48px]">big picture, </b>
          </p>
          <p>
            <span id="to-the" className='opacity-0'>to the </span>
            <b id="small-details" className="opacity-0 text-c-heading text-[12px] tablet:text-[16px]">smallest details</b>
          </p>
        </h1>
      </div>
      <LargeImageCarousel>
        <LargeImageCarousel.CarouselItems images={images} />
      </LargeImageCarousel>
    </SectionLayout>
  )
};

export default ExploreSubsectionFour;
