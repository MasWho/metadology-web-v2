import SectionLayout from '../../layout/section-layout';
import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

const images = [
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-4',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-5',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-6',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
  {
    url: 'https://d1r0ovlr0podg3.cloudfront.net/imgs/explore-subsection-four-img-7',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui repudiandae consectetur beatae totam esse mollitia rem libero sit.' 
  },
];

const ExploreSubsectionFour = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {amount: 0.7});
  const showHeading = async () => {
    await animate(`#from-the`, {opacity: 1}, {duration: 0.5});
    animate(`#big-picture`, {opacity: 1}, {duration: 1});
    await animate(`#big-picture`, {fontSize: '48px'}, {duration: 1.5});
    await animate(`#to-the`, {opacity: 1}, {duration: 0.5});
    animate(`#small-details`, {opacity: 1}, {duration: 0.5});
    await animate(`#small-details`, {fontSize: '16px'}, {duration: 1});
  };

  useEffect(() => {
    if(isInView) {
      showHeading();
    }
  }, [isInView])

  return (
    <SectionLayout sectionName={'explore'} bgColor="bg-c-secondary" noPadding>
      <div ref={scope} className="relative py-14 flex flex-col left-[2.5vw] mx-[2.5vw] tablet:left-[20vw] tablet:mx-[5vw]">
        {/* Very custom Heading */}
        <h1 className="text-[24px] text-c-section-heading">
          <p>
            <span id="from-the" className='opacity-0'>From the </span>
            <b id="big-picture" className="opacity-0 text-c-heading">big picture, </b>
          </p>
          <p>
            <span id="to-the" className='opacity-0'>to the </span>
            <b id="small-details" className="opacity-0 text-c-heading">smallest details</b>
          </p>
        </h1>
      </div>
    </SectionLayout>
  );
};

export default ExploreSubsectionFour;
