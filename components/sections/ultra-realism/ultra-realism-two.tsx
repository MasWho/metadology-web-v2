import LargeImageCarousel from '@/components/carousel/large-image-carousel/large-image-carousel';
import SectionLayout from '../../layout/section-layout';
import { useAnimate, useInView } from 'framer-motion';
import { useCallback, useEffect } from 'react';

const images = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img1',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img2',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img3',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img4',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img5',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img6',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img7',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img8',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/ultra-realism-section-two-img9',
    text: 'Transform Your Vision into Reality. From the sweeping landscapes surrounding your development to the finest details in finishes and fabrics, we breathe life into every element.',
    caption: ''
  },
];

const UltraRealismTwo = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {amount: 0.7});
  const showHeading = useCallback(async () => {
    await animate(`#from-the`, {opacity: 1}, {duration: 0.5});
    await animate(`#big-picture`, {opacity: 1}, {duration: 0.5});
    await animate(`#to-the`, {opacity: 1}, {duration: 0.5});
    await animate(`#small-details`, {opacity: 1}, {duration: 0.5});
  }, [animate]);

  const removeHeading = useCallback(async () => {
    animate(`#from-the`, {opacity: 0}, {duration: 0.5});
    animate(`#big-picture`, {opacity: 0}, {duration: 0.5});
    animate(`#to-the`, {opacity: 0}, {duration: 0.5});
    animate(`#small-details`, {opacity: 0}, {duration: 0.5});
  }, [animate])

  useEffect(() => {
    if(isInView) {
      showHeading();
    } else {
      removeHeading();
    }
  }, [isInView, showHeading, removeHeading])

  return (
    <SectionLayout sectionName={'ultra-realism'} noPadding>
      <div ref={scope} className="relative pt-14 pb-10 tablet:pb-14 flex flex-col left-[2.5vw] mx-[2.5vw] tablet:left-[20vw] tablet:mx-[5vw]">
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
        <LargeImageCarousel.CarouselItemText items={images} />
        <LargeImageCarousel.CarouselItems images={images} />
        <LargeImageCarousel.CarouselItemCaption items={images} />
        <LargeImageCarousel.CarouselNav items={images} />
      </LargeImageCarousel>
    </SectionLayout>
  )
};

export default UltraRealismTwo;
